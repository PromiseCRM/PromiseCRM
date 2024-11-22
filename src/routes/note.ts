import { FastifyInstance} from 'fastify';
import NoteController from '../controllers/Note.controller';

export default async function noteRoutes(fastify: FastifyInstance) {
    fastify.get('/notes', NoteController.getAll);
    fastify.get('/notes/:id', NoteController.getOne);
    fastify.post('/notes', NoteController.create);
    fastify.put('/notes/:id', NoteController.update);
    fastify.delete('/notes/:id', NoteController.delete);
}