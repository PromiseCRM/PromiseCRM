import Joi from 'joi';

const NoteCreateValidator = Joi.object({
    customer_id: Joi.number().required(),
    content: Joi.string().required(),
});

export default NoteCreateValidator;