
import { z } from 'zod';
const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const UserSchemaUpdate = z
  .object({
    id: z.string().transform((value) => Number(value)),
    name: z.string().min(1),
    email: z.string().regex(isValidEmail),
    cpf: z.string().refine(value => value.length === 11 && /^\d+$/.test(value), {
      message: 'CPF deve conter exatamente 11 dígitos numéricos'
    }),
    phone: z.string().refine(value => /^[0-9]+$/.test(value), {
      message: 'Phone deve conter somente dígitos numéricos'
    }).refine(value => value.length >= 10 && value.length <= 11, {
      message: 'Phone deve conter entre 10 e 11 dígitos'
    }),
    status: z.enum(['Ativo', 'Inativo', 'Aguardando', 'Desativado']),
  })
  .strict();

export type TUserUpdate = z.infer<typeof UserSchemaUpdate>;

export const UserSchemaCreate = UserSchemaUpdate.omit({ id: true });

export type TUserCreate = z.infer<typeof UserSchemaCreate>;