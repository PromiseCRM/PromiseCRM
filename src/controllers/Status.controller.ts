import { FastifyReply, FastifyRequest } from 'fastify';
import Status from '../models/status';
import StatusCreateValidator from '../validators/StatusCreate.validator';
import StatusUpdateValidator from '../validators/StatusUpdate.validator';
import { NotFoundException } from '../exceptions/error-notfound.exception';

class StatusController {
    public async getAll(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const statuses = await Status.findAll();
        reply.send({ statuses });
    }

    public async getOne(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const status = await Status.findByPk(id);
        reply.send({ status });
    }

    public async create(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const values = await StatusCreateValidator.validateAsync(req.body, { abortEarly: false });
        const { name, type, is_active } = values;

        const status = await Status.create({ name, type, is_active });
        reply.send({ status });
    }

    public async update(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const status = await Status.findByPk(id);

        if (!status) {
            throw new NotFoundException('Status not found');
        }

        const values = await StatusUpdateValidator.validateAsync(req.body, { abortEarly: false });
        const { name, type, is_active } = values;

        await status.update({ name, type, is_active });
        reply.send({ status });
    }

    public async delete(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as { id: string };
        const status = await Status.findByPk(id);
        
        if (!status) {
            throw new NotFoundException('Status not found');
        }

        await status.destroy();
        reply.send({ message: 'Status deleted' });
    }
}

export default new StatusController();
