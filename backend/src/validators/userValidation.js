const Joi = require('joi');

const createUserSchema = Joi.object({
  name: Joi.string().min(3).required().pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/).messages({
    'string.base': 'O nome deve ser uma string',
    'string.empty': 'O nome não pode estar vazio',
    'string.min': 'O nome deve ter pelo menos {#limit} caracteres',
    'string.pattern.base': 'O nome não pode conter números'
  }),

  email: Joi.string().email().required().messages({
    'string.base': 'O email deve ser uma string',
    'string.empty': 'O email não pode estar vazio',
    'string.email': 'O email deve ser um formato válido'
  }),

  cpf: Joi.string().pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).required().messages({
    'string.base': 'O CPF deve ser uma string',
    'string.empty': 'O CPF não pode estar vazio',
    'string.pattern.base': 'O CPF deve estar no formato 000.000.000-00'
  }),

  telefone: Joi.string().pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/).required().messages({
    'string.base': 'O telefone deve ser uma string',
    'string.empty': 'O telefone não pode estar vazio',
    'string.pattern.base': 'O telefone deve estar no formato (00) 00000-0000 ou (00) 0000-0000'
  }),

  status: Joi.string().valid('Ativo', 'Inativo', 'Aguardando ativação', 'Desativado').required().messages({
    'string.base': 'O status deve ser uma string',
    'string.empty': 'O status não pode estar vazio',
    'any.only': 'O status deve ser: Ativo, Inativo, Aguardando ativação ou Desativado'
  })
});

const updateUserSchema = Joi.object({
  name: Joi.string().min(3).pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/).messages({
    'string.base': 'O nome deve ser uma string',
    'string.empty': 'O nome não pode estar vazio',
    'string.min': 'O nome deve ter pelo menos {#limit} caracteres',
    'string.pattern.base': 'O nome não pode conter números'
  }),

  email: Joi.string().email().messages({
    'string.base': 'O email deve ser uma string',
    'string.email': 'O email deve ser um formato válido'
  }),

  cpf: Joi.string().pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).messages({
    'string.base': 'O CPF deve ser uma string',
    'string.pattern.base': 'O CPF deve estar no formato 000.000.000-00'
  }),

  telefone: Joi.string().pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/).messages({
    'string.base': 'O telefone deve ser uma string',
    'string.pattern.base': 'O telefone deve estar no formato (00) 00000-0000 ou (00) 0000-0000'
  }),

  status: Joi.string().valid('Ativo', 'Inativo', 'Aguardando ativação', 'Desativado').messages({
    'string.base': 'O status deve ser uma string',
    'any.only': 'O status deve ser: Ativo, Inativo, Aguardando ativação ou Desativado'
  })
});

module.exports = {
  createUserSchema,
  updateUserSchema
};
