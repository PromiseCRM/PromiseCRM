import { FastifyInstance } from 'fastify';
import ContactController from '../controllers/Contact.controller';

export default async function contactRoutes(fastify: FastifyInstance) {
    fastify.get('/contacts', ContactController.getAll);
    fastify.get('/contacts/:id', ContactController.getOne);
    fastify.post('/contacts', ContactController.create);
    fastify.put('/contacts/:id', ContactController.update);
    fastify.delete('/contacts/:id', ContactController.delete);
}