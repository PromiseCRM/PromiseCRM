import Joi from "joi";

const ContactCreateValidator = Joi.object({
    customer_id: Joi.number().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone_number: Joi.string().required()
});

export default ContactCreateValidator;