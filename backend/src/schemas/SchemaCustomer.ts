import * as Joi from 'joi';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

export default Joi.object({
  name: Joi.string().trim().min(1).required()
    .messages({
      'string.empty': 'Name must not be empty',
    }),
  email: Joi.string().trim().email().required()
    .messages({
      'string.email': 'Email must be a valid',
      'string.empty': 'Email must not be empty',
    }),
  phone: Joi.string().trim().min(1).required()
    .messages({
      'string.empty': 'Phone must not be empty',
    }),
  cpf: Joi.string()
    .trim()
    .custom((value, helper) => {
      if (!cpfValidator.isValid(value)) {
        return helper.message({ custom: 'CPF must be a valid' });
      }
      return value;
    })
    .required()
    .messages({
      'string.empty': 'CPF must not be empty',
    }),
});
