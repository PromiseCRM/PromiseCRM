import Joi from "joi";

const ContactUpdateValidator = Joi.object({
    customer_id: Joi.number(),
    first_name: Joi.string(),
    last_name: Joi.string(),
    email: Joi.string().email(),
    phone_number: Joi.string()
});

export default ContactUpdateValidator;