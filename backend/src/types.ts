import { cpf } from "cpf-cnpj-validator";
import { z } from "zod";

export type status = "Ativo" | "Inativo" | "Aguardando ativação" | "Desativado";

export const ClientZodSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  email: z.string().email(),
  cpf: z.string().refine((val) => cpf.isValid(val), {
    message: "CPF inválido",
  }),
  phone: z.string().min(10),
  status: z.enum(["Ativo", "Inativo", "Aguardando ativação", "Desativado"]),
});

export type Client = z.infer<typeof ClientZodSchema>;
