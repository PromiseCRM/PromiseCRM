import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import OpportunityController from '../controllers/Opportunity.controller';

async function opportunityRoutes(fastify: FastifyInstance) {
    fastify.get('/opportunities', OpportunityController.getAll);
    fastify.get('/opportunities/:id', OpportunityController.getOne);
    fastify.post('/opportunities', OpportunityController.create);
    fastify.put('/opportunities/:id', OpportunityController.update);
    fastify.delete('/opportunities/:id', OpportunityController.delete);
}

export default opportunityRoutes;