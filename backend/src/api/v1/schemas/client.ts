import { z } from 'zod';
import parsePhoneNumber from 'libphonenumber-js';
import { validate } from 'gerador-validador-cpf';

const clientSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  statusId: z.number().int().positive(),

  cpf: z.string().length(11)
    .refine((value) => validate(value), { message: 'Invalid CPF' }),

  phoneNumber: z.string().min(10).max(11)
    .refine((value) => {
      const parsedPhone = parsePhoneNumber(value, 'BR');
      return parsedPhone?.isValid();
    }, { message: 'Invalid phone number' })
    .transform((value) => {
      const parsedPhone = parsePhoneNumber(value, 'BR');
      return parsedPhone?.nationalNumber as string;
    }),
});

export default clientSchema;
