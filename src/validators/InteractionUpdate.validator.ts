import Joi from 'joi';

const InteractionUpdateValidator = Joi.object({
    customer_id: Joi.number(),
    type: Joi.string(),
    date: Joi.date().iso(),
    description: Joi.string().max(500),
});

export default InteractionUpdateValidator;