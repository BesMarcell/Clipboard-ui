import Joi from 'joi';

export const joiSchema = {
  value: Joi.string().required().label(' '),
  type: Joi.string().required().label(' ')
};
