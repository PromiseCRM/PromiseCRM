import Joi from 'joi';

const OpportunityCreateValidator = Joi.object({
    customer_id: Joi.number().required(),
    name: Joi.string().required(),
    value: Joi.string().required(),
    stage: Joi.string().required(),
    estimed_clsed: Joi.date().optional(),
});

export default OpportunityCreateValidator;