import { z } from 'zod'
import { validateCPF, validatePhoneNumber } from '../utils'

export const customerSchema = z.object({
  name: z.string().trim().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
  email: z.string().trim().nonempty('Obrigatório').email('Email inválido.'),
  document: z
    .string()
    .trim()
    .refine((val) => validateCPF(val), { message: 'Documento inválido' }),
  phone: z
    .string()
    .trim()
    .refine((val) => validatePhoneNumber(val), {
      message: 'Telefone inválido',
    }),
  status: z.string().trim().nonempty('Obrigatório'),
})

export type CustomerProps = z.infer<typeof customerSchema>
