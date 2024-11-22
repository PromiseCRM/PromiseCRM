import { FastifyInstance } from 'fastify';
import CustomerController from '../controllers/Customer.controller';

async function customerRoutes(fastify: FastifyInstance) {
    fastify.get('/customers', CustomerController.getAll);
    fastify.get('/customers/:id', CustomerController.getOne);
    fastify.post('/customers', CustomerController.create);
    fastify.put('/customers/:id', CustomerController.update);
    fastify.delete('/customers/:id', CustomerController.delete);
}

export default customerRoutes;