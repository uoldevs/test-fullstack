import joi from 'joi';
import cpfValidator from '../utils/cpfValidator';

const name = joi.string().required().empty().min(1).max(100).messages({
  'any.required': 'O nome não pode ser vazio',
  'string.empty': 'O nome não pode ser vazio',
  'string.min': 'O nome deve ter no mínimo 1 caractere',
  'string.max': 'O nome deve ter no máximo 100 caracteres',
});

const cpf = joi
  .string()
  .required()
  .empty()
  .length(11)
  .custom((value, helper) => {
    if (!cpfValidator(value)) {
      return helper.message({ custom: 'Cpf inválido' });
    }
  })
  .messages({
    'any.required': 'O CPF não pode ser vazio',
    'string.empty': 'O CPF não pode ser vazio',
    'string.length': 'O CPF deve ter 11 digítos',
  });

const email = joi
  .string()
  .required()
  .empty()
  .email({ tlds: { allow: false } })
  .max(150)
  .messages({
    'any.required': 'O email não pode ser vazio',
    'string.empty': 'O email não pode ser vazio',
    'string.email': 'O email é inválido',
  });

const phoneNumber = joi
  .string()
  .required()
  .empty()
  .length(11)
  .regex(/^(?:(1[1-9]|2[12478]|3[124578]|4[12456]|5[13457]|6[1-9]|7[1-9]|8[1-9]|9[123456789])9\d{8})$/)
  .messages({
    'any.required': 'O número de telefone não pode ser vazio',
    'string.empty': 'O número de telefone não pode ser vazio',
    'string.length': 'O número de telefone deve ter 11 digítos',
    'string.pattern.base': 'Número de telefone inválido',
  });

const status = joi
  .string()
  .required()
  .empty()
  .regex(/^Ativo$|^Inativo$|^Desativado$|^Aguardando ativação$/)
  .messages({
    'any.required': 'O status não pode ser vazio',
    'string.empty': 'O status não pode ser vazio',
    'string.pattern.base': 'O status deve ser Ativo|Inativo|Desativado|Aguardando ativação',
  });

export { cpf, email, name, status, phoneNumber };
