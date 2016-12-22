import Joi from 'joi';

export const joiSchema = {
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(20).required(),
  confirmPassword: Joi.string().required().valid(Joi.ref('password'))
};
