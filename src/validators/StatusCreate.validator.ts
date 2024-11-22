import Joi from 'joi';

const StatusCreateValidator = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().valid("Customer", "Opportunity").required(),
    is_active: Joi.boolean().required()
});

export default StatusCreateValidator;