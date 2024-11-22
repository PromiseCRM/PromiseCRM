import Joi from 'joi';

const TagCreateValidator = Joi.object({
    name: Joi.string().min(3).max(30).required(),
});

export default TagCreateValidator;