import Joi from 'joi';

const CustomerUpdateValidator = Joi.object({
    first_name: Joi.string().min(1).max(50),
    last_name: Joi.string().min(1).max(50),
    company_name: Joi.string().min(1).max(100),
    job_title: Joi.string().min(1).max(50),
    birth_date: Joi.date().iso()
});

export default CustomerUpdateValidator;