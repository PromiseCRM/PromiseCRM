import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import AddressController from '../controllers/Address.controller';

export default async function addressRoutes(fastify: FastifyInstance) {
    fastify.get('/addresses', AddressController.getAll);
    fastify.get('/addresses/:id', AddressController.getOne);
    fastify.post('/addresses', AddressController.create);
    fastify.put('/addresses/:id', AddressController.update);
    fastify.delete('/addresses/:id', AddressController.delete);
}