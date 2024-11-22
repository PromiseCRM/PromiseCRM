import { FastifyInstance } from 'fastify';
import StatusController from '../controllers/Status.controller';

async function statusRoutes(fastify: FastifyInstance) {
    fastify.get('/statuses', StatusController.getAll);
    fastify.get('/statuses/:id', StatusController.getOne);
    fastify.post('/statuses', StatusController.create);
    fastify.put('/statuses/:id', StatusController.update);
    fastify.delete('/statuses/:id', StatusController.delete);
}

export default statusRoutes;