import { FastifyReply, FastifyRequest } from 'fastify';
import Contact from '../models/contact';
import ContactCreateValidator from '../validators/ContactUpdate.validator';
import ContactUpdateValidator from '../validators/ContactUpdate.validator';
import { NotFoundException } from '../exceptions/error-notfound.exception';

class ContactController {
    async getAll(_: FastifyRequest, reply: FastifyReply): Promise<void> {
        const contacts = await Contact.findAll({ include: ['customer'] });
        reply.send({ contacts });
    }

    async getOne(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const contact = await Contact.findByPk(id);
        reply.send({ contact });
    }

    async create(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const values = await ContactCreateValidator.validateAsync(req.body, {abortEarly: false});
        const { customer_id, first_name, last_name, email, phone_number } = values;
        
        const contact = await Contact.create({ customer_id, first_name, last_name, email, phone_number });
        reply.send({ contact });
    }

    async update(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        
        const contact = await Contact.findByPk(id);

        if (!contact) {
            throw new NotFoundException('Contact not found');
        }

        const values = await ContactUpdateValidator.validateAsync(req.body, {abortEarly: false});
        const { customer_id, first_name, last_name, email, phone_number } = values;
        
        await contact.update({ customer_id, first_name, last_name, email, phone_number });
        reply.send({ contact });
    }

    async delete(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        
        const contact = await Contact.findByPk(id);
        
        if (!contact) {
            throw new NotFoundException('Contact not found');
        }

        await contact.destroy();
        reply.send({ message: 'Contact deleted' });
    }
}

export default new ContactController;
