import Joi from 'joi';

const InteractionCreateValidator = Joi.object({
    customer_id: Joi.number().required(),
    type: Joi.string().required(),
    date: Joi.date().iso().required(),
    description: Joi.string().max(500).required(),
});

export default InteractionCreateValidator;