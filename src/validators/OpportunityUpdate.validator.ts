import Joi from 'joi';

const OpportunityUpdateValidator = Joi.object({
    customer_id: Joi.number(),
    name: Joi.string(),
    value: Joi.string(),
    stage: Joi.string(),
    estimed_clsed: Joi.date(),
});

export default OpportunityUpdateValidator;