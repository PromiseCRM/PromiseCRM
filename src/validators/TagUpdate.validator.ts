import Joi from 'joi';

const TagUpdateValidator = Joi.object({
    name: Joi.string().min(3).max(30),
});

export default TagUpdateValidator;