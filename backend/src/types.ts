import { cpf } from 'cpf-cnpj-validator';
import { z } from 'zod';

export type status = 'Ativo' | 'Inativo' | 'Aguardando ativação' | 'Desativado';

export const UserZodSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  cpf: z.string().refine((val) => cpf.isValid(val), {
    message: 'CPF inválido',
  }),
  status: z.enum([
    'Ativo',
    'Inativo',
    'Aguardando ativação',
    'Desativado']),
})

export type User = z.infer<typeof UserZodSchema>;