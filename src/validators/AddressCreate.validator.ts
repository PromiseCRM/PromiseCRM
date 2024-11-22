import Joi from 'joi';

const AddressCreateValidator = Joi.object({
    customer_id: Joi.string().required(),
    street: Joi.string().min(3).max(100).required(),
    number: Joi.string().required(),
    neighborhood: Joi.string().min(3).max(100).required(),
    city: Joi.string().min(2).max(50).required(),
    state: Joi.string().min(2).max(50).required(),
    zipcode: Joi.string().pattern(new RegExp('^[0-9]{5}(?:-[0-9]{4})?$')).required(),
    country: Joi.string().min(2).max(50).required()
});

export default AddressCreateValidator;