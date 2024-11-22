import { FastifyReply, FastifyRequest } from 'fastify';
import Address from '../models/address'
import AddressCreateValidator from '../validators/AddressCreate.validator';
import AddressUpdateValidator from '../validators/AddressUpdate.validator';
import { NotFoundException } from '../exceptions/error-notfound.exception';

class AddressController {
    public async getAll(_: FastifyRequest, reply: FastifyReply): Promise<void> {
        const addresses = await Address.findAll({ include: ['customer'] });
        reply.send({ addresses });
    }

    public async getOne(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const address = await Address.findByPk(id);
        reply.send({ address });
    }

    public async create(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const values = await AddressCreateValidator.validateAsync(req.body, { abortEarly: false });
        const { customer_id, street, number, neighborhood, city, state, zipcode, country } = values;
        
        const address = await Address.create({ customer_id, street, number, neighborhood, city, state, zipcode, country });
        reply.send({ address });
    }

    public async update(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const address = await Address.findByPk(id);

        if (!address) {
            throw new NotFoundException('Address not found');
        }

        const values = await AddressUpdateValidator.validateAsync(req.body, { abortEarly: false });
        const { customer_id, street, number, neighborhood, city, state, zipcode, country } = values;

        await address.update({ customer_id, street, number, neighborhood, city, state, zipcode, country });
        reply.send({ address });
    }

    public async delete(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const address = await Address.findByPk(id);

        if (!address) {
            throw new NotFoundException('Address not found');
        }

        await address.destroy();
        reply.send({ message: 'Address deleted' });
    }
}

export default new AddressController();
