import { FastifyReply, FastifyRequest } from 'fastify';
import Tag from '../models/tag';
import { NotFoundException } from '../exceptions/error-notfound.exception';
import TagCreateValidator from '../validators/TagCreate.validator';
import TagUpdateValidator from '../validators/TagUpdate.validator';

class TagController {
    public async getAll(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const tags = await Tag.findAll();

        reply.send({ tags });
    }

    public async getOne(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const tag = await Tag.findByPk(id);

        reply.send({ tag });
    }

    public async create(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const values = await TagCreateValidator.validateAsync(req.body);
        const { name } = values;

        const tag = await Tag.create({ name });

        reply.send({ tag });
    }

    public async update(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };

        const values = await TagUpdateValidator.validateAsync(req.body);
        const { name } = values;

        const tag = await Tag.findByPk(id);

        if (!tag) {
            throw new NotFoundException('Tag not found');
        }

        await tag.update({ name });

        reply.send({ tag });
    }

    public async delete(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };

        const tag = await Tag.findByPk(id);

        if (!tag) {
            throw new NotFoundException('Tag not found');
        }

        await tag.destroy();

        reply.send({ message: "Tag deleted" });
    }
}

export default new TagController();