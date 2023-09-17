import { z } from "zod";
import { validate } from "gerador-validador-cpf";
import { isValidPhoneNumber } from "libphonenumber-js/min";

const schema = z.object({
  name: z.string().min(3, "Nome Deve ter pelo menos 3 caractere"),
  email: z.string().email("Email inválido"),
  status: z.string().min(1, "Escolha um status"),

  cpf: z
    .string()
    .nonempty({ message: "Informe o CPF" })
    .refine((value) => validate(value), { message: "CPF inválido" }),

  phoneNumber: z
    .string()
    .nonempty({ message: "Informe o número de telefone" })
    .min(10, { message: "Número de telefone deve ter pelo menos 10 dígitos" })
    .refine((value) => isValidPhoneNumber(value, "BR"), {
      message: "Número de telefone inválido",
    }),
});

type ClientSchema = z.infer<typeof schema>;

export default schema;
export type { ClientSchema };
