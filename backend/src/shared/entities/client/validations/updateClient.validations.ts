import * as joi from 'joi';

export const updateClient = joi.object({
  name: joi.string().empty().min(1).max(100).messages({
    'string.empty': 'O nome não pode ser vazio',
    'string.base': 'O nome deve ser uma string',
    'string.min': 'O nome deve ter no mínimo 1 caractere',
    'string.max': 'O nome deve ter no máximo 100 caractere',
  }),

  cpf: joi.string().empty().length(11).messages({
    'string.empty': 'O CPF não pode ser vazio',
    'string.base': 'O CPF deve ser uma string',
    'string.length': 'O CPF deve ter 11 digítos',
  }),

  email: joi.string().empty().email().messages({
    'string.empty': 'O email não pode ser vazio',
    'string.base': 'O email deve ser uma string',
    'string.email': 'O email é inválido',
  }),

  phoneNumber: joi
    .string()
    .empty()
    .length(11)
    .regex(
      /^(?:(1[1-9]|2[12478]|3[124578]|4[12456]|5[13457]|6[1-9]|7[1-9]|8[1-9]|9[123456789])9\d{8})$/,
    )
    .messages({
      'string.empty': 'O número de telefone não pode ser vazio',
      'string.base': 'O número de telefone deve ser uma string',
      'string.length': 'O número de telefone deve ter 11 digítos',
      'string.pattern.base': 'Número de telefone inválido',
    }),

  status: joi
    .object({
      name: joi
        .string()
        .empty()
        .regex(/^Ativo$|^Inativo$|^Desativado$|^Aguardando ativação$/)
        .messages({
          'string.empty': 'O nome do status não pode ser vazio',
          'string.base': 'O nome do status deve ser uma string',
          'string.pattern.base':
            'O nome do status deve ser Ativo|Inativo|Desativado|Aguardando ativação',
        }),
    })
    .messages({
      'object.base': 'O status deve ser um objeto',
    }),
});
