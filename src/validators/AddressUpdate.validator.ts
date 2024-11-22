import Joi from 'joi';

const AddressUpdateValidator = Joi.object({
    customer_id: Joi.string(),
    street: Joi.string().min(3).max(100),
    number: Joi.string(),
    neighborhood: Joi.string().min(3).max(100),
    city: Joi.string().min(2).max(50),
    state: Joi.string().min(2).max(50),
    zipcode: Joi.string().pattern(new RegExp('^[0-9]{5}(?:-[0-9]{4})?$')),
    country: Joi.string().min(2).max(50)
});

export default AddressUpdateValidator;