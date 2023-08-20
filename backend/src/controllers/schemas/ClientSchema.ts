import { z } from 'zod';
import isValidCPF from '../../utils/cpfValidator';

export const clientSchema = z.object({
  name: z.string().min(2).max(30),
  email: z.string().email().max(50),
  CPF: z.string().refine((cpf) => isValidCPF(cpf), { message: 'Invalid CPF' }),
  phonenumber: z.string().min(10),
  status: z.enum(['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado']),
});
