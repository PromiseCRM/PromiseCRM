import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import Joi from "joi";
import { NotFoundException } from "./error-notfound.exception";

const errorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    if(error instanceof Joi.ValidationError) {
        return reply.status(422).send({errors: error.details.map((e) => e.message)});
    }

    if(error instanceof NotFoundException) {
        return reply.status(error.getStatus()).send({message: error.message});
    }

    return reply.status(500).send({message: 'Internal server error'});
}

export default errorHandler;