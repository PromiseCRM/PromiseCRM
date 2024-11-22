import Joi from 'joi';

const CustomerCreateValidator = Joi.object({
    "tag_id": Joi.number().integer().positive().optional(),
    first_name: Joi.string().min(1).max(50).required(),
    last_name: Joi.string().min(1).max(50).required(),
    company_name: Joi.string().min(1).max(100),
    job_title: Joi.string().min(1).max(50),
    birth_date: Joi.date().iso()
});

export default CustomerCreateValidator;