import { FastifyReply, FastifyRequest } from "fastify";
import Customer from "../models/customer";
import CustomerCreateValidator from "../validators/CustomerCreate.validator";
import CustomerUpdateValidator from "../validators/CustomerUpdate.validator";
import { NotFoundException } from "../exceptions/error-notfound.exception";
import Tag from "../models/tag";

class CustomerController {
    async getAll(_: FastifyRequest, reply: FastifyReply): Promise<void> {
        const customers = await Customer.findAll({
            include: ["contacts", "addresses", "interactions", "status", "notes", 'tags']
        });
        reply.send({ customers });
    }

    async getOne(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as any;
        const customer = await Customer.findByPk(id);
        reply.send({ customer }).status(200);
    }

    async create(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const values = await CustomerCreateValidator.validateAsync(req.body, { abortEarly: false });
        const { tag_id, first_name, last_name, company_name, job_title, birth_date, } = values;

        const customer = await Customer.create({ first_name, last_name, company_name, job_title, birth_date });

        if(tag_id) {
            const tag = await Tag.findByPk(tag_id);
            
            if (!tag) {
                throw new NotFoundException("Tag not found");
            }

            //@ts-ignore   
            await customer.addTag(tag);
        }
        reply.send({ customer });
    }

    async update(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as any;
        
        const customer = await Customer.findByPk(id);
        
        if (!customer) {
            throw new NotFoundException("Customer not found");
        }

        const values = await CustomerUpdateValidator.validateAsync(req.body, { abortEarly: false });
        const { first_name, last_name, company_name, job_title, birth_date } = values;
        
        await Customer.update({ first_name, last_name, company_name, job_title, birth_date }, { where: { id } });
        reply.send({ message: "Customer updated" });
    }

    async delete(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = req.params as any;

        const customer = await Customer.findByPk(id);

        if (!customer) {
            throw new NotFoundException("Customer not found");
        }

        await customer.destroy();
        reply.send({ message: "Customer deleted" });
    }
}

export default new CustomerController;