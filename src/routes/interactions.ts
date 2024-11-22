import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import InteractionController from '../controllers/Interaction.controller';

async function interactionsRoutes(fastify: FastifyInstance) {
    fastify.get('/interactions', InteractionController.getAll);
    fastify.get('/interactions/:id', InteractionController.getOne);
    fastify.post('/interactions', InteractionController.create);
    fastify.put('/interactions/:id', InteractionController.update);
    fastify.delete('/interactions/:id', InteractionController.delete);
}

export default interactionsRoutes;