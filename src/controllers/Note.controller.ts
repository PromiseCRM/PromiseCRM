import { FastifyRequest, FastifyReply } from 'fastify';
import Note from '../models/note';
import { NotFoundException } from '../exceptions/error-notfound.exception';
import NoteCreateValidator from '../validators/NoteCreate.validator';
import NoteUpdateValidator from '../validators/NoteUpdate.validator';

class NoteController {
    public async getAll(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const notes = await Note.findAll();

        reply.send({notes});
    }

    public async getOne(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const {id} = req.params as {id: string};
        const note = await Note.findByPk(id);

        if(!note) {
            throw new NotFoundException('Note not found');
        }

        reply.send({note});
    }

    public async create(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const values = await NoteCreateValidator.validateAsync(req.body);
        const {customer_id, content} = values;

        const note = await Note.create({customer_id, content});

        reply.send({note});
    }

    public async update(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const {id} = req.params as {id: string};
        const note = await Note.findByPk(id);

        if(!note) {
            throw new NotFoundException('Note not found');
        }

        const values = await NoteUpdateValidator.validateAsync(req.body);
        const {customer_id, content} = values;

        await note.update({customer_id, content});

        reply.send({message: 'Note updated'});
    }

    public async delete(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const {id} = req.params as {id: string};
        const note = await Note.findByPk(id);

        if(!note) {
            throw new NotFoundException('Note not found');
        }

        await note.destroy();

        reply.send({message: 'Note deleted'});
    }
}

export default new NoteController();