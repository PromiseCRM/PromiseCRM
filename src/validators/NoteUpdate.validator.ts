import Joi from 'joi';

const NoteUpdateValidator = Joi.object({
    customer_id: Joi.number(),
    content: Joi.string(),
});

export default NoteUpdateValidator;