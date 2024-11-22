import { NotFoundException } from '../exceptions/error-notfound.exception';
import Interaction from '../models/interaction';
import InteractionCreateValidator from '../validators/InteractionCreate.validator';
import InteractionUpdateValidator from '../validators/InteractionUpdate.validator';
import { FastifyReply, FastifyRequest } from 'fastify';

class InteractionController {
    public async getAll(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const interactions = await Interaction.findAll({ include: ['customer'] });
        reply.send({ interactions });
    }

    public async getOne(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const interaction = await Interaction.findByPk(id);
        reply.send({ interaction });
    }

    public async create(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const values = await InteractionCreateValidator.validateAsync(req.body, { abortEarly: false });
        const { customer_id, date, type, description } = values;
        const interaction = await Interaction.create({ customer_id, date, type, description });
        reply.send({ interaction });
    }

    public async update(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const interaction = await Interaction.findByPk(id);
        
        if (!interaction) {
            throw new NotFoundException('Interaction not found');
        }

        const values = await InteractionUpdateValidator.validateAsync(req.body, { abortEarly: false });
        const { customer_id, date, type, description } = values;
        
        await interaction.update({ customer_id, date, type, description });
        
        reply.send({ message: 'Interaction updated' });
    }

    public async delete(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const interaction = await Interaction.findByPk(id);
        
        if (!interaction) {
            throw new NotFoundException('Interaction not found');
        }

        await interaction.destroy();
        reply.send({ message: 'Interaction deleted' });
    }
}

export default new InteractionController();