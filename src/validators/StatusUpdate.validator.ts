import Joi from 'joi';

const StatusUpdateValidator = Joi.object({
    name: Joi.string(),
    type: Joi.string().valid("Customer", "Opportunity"),
    is_active: Joi.boolean()
});

export default StatusUpdateValidator;