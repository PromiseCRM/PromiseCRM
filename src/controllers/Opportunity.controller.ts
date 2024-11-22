import { NotFoundException } from '../exceptions/error-notfound.exception';
import Opportunity from '../models/opportunity';
import OpportunityCreateValidator from '../validators/OpportunityCreate.validator';
import OpportunityUpdateValidator from '../validators/OpportunityUpdate.validator';
import { FastifyReply, FastifyRequest } from 'fastify';

class OpportunityController {
    public async getAll(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const opportunities = await Opportunity.findAll();
        reply.send({ opportunities });
    }

    public async getOne(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const opportunity = await Opportunity.findByPk(id);
        reply.send({ opportunity });
    }

    public async create(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const values = await OpportunityCreateValidator.validateAsync(req.body, { abortEarly: false });
        const { customer_id, name, value, status, stage, estimed_clsed } = values;
        
        const opportunity = await Opportunity.create({
            customer_id,
            name,
            value,
            status,
            stage,
            estimed_clsed,
        });

        reply.send({ opportunity });
    }

    public async update(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const opportunity = await Opportunity.findByPk(id);
        
        if (!opportunity) {
            throw new NotFoundException('Opportunity not found');
        }

        const values = await OpportunityUpdateValidator.validateAsync(req.body, { abortEarly: false });
        const { customer_id, name, value, status, stage, estimed_clsed } = values;
        
        await opportunity.update({
            customer_id,
            name,
            value,
            status,
            stage,
            estimed_clsed,
        });
        
        reply.send({ opportunity });
    }

    public async delete(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };

        const opportunity = await Opportunity.findByPk(id);
        
        if (!opportunity) {
            throw new NotFoundException('Opportunity not found');
        }

        await opportunity.destroy();
        reply.send({ message: 'Opportunity deleted' });
    }
}

export default new OpportunityController();
