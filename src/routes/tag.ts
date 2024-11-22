import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import TagController from '../controllers/Tag.controller';

async function tagRoutes(fastify: FastifyInstance) {
    fastify.get('/tags', TagController.getAll);
    fastify.get('/tags/:id', TagController.getOne);
    fastify.post('/tags', TagController.create);
    fastify.put('/tags/:id', TagController.update);
    fastify.delete('/tags/:id', TagController.delete);
}

export default tagRoutes;