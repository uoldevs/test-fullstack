"use client";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Client } from "@/services/clients/types";
import Input from "./components/Input";
import Button from "./components/Button";
import { clientStatusContext } from "@/contexts/clientStatus";
import { createClient, updateClient } from "@/services/clients";
import { validate } from "gerador-validador-cpf";
import { parsePhoneNumber } from "libphonenumber-js/min";
import Select from "./components/Select";

type FormProps = {
  client?: Client;
  backButton?: React.ReactNode;
};

const schema = z.object({
  name: z.string().min(3, "Nome Deve ter pelo menos 3 caractere"),
  email: z.string().email("Email inválido"),
  status: z.string().min(1, "Escolha um status"),

  cpf: z
    .string()
    .length(11, { message: "CPF deve ter 11 dígitos" })
    .refine((value) => validate(value), { message: "CPF inválido" }),

  phoneNumber: z
    .string()
    .min(10, { message: "Número de telefone deve ter pelo menos 10 dígitos" })
    .max(11, { message: "Número de telefone deve ter no máximo 11 dígitos" })
    .refine(
      (value) => {
        if (value.length === 0) return false;
        const parsedPhone = parsePhoneNumber(value, "BR");
        return parsedPhone?.isValid();
      },
      { message: "Número de telefone inválido" }
    ),
});

type FormValues = z.infer<typeof schema> & {
  root: { serverError: string };
};

export default function Form({ client, backButton }: FormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      name: client ? client.name : "",
      email: client ? client.email : "",
      cpf: client ? client.cpf : "",
      phoneNumber: client ? client.phoneNumber : "",
      status: client ? client?.status?.name : "",
    },
    resolver: zodResolver(schema),
  });

  const { clientStatus: allStatus, listClientStatus } =
    useContext(clientStatusContext);

  const handleAddClient = async (data: FormValues) => {
    const newClient = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phoneNumber: data.phoneNumber,
      statusId: allStatus?.find((status) => status.name === data.status)?.id,
    };
    return createClient(newClient);
  };

  const handleUpdateClient = async (data: FormValues) => {
    const clientData = {
      id: client?.id,
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phoneNumber: data.phoneNumber,
      statusId: allStatus?.find((status) => status.name === data.status)?.id,
    };
    return updateClient(clientData.id as number, clientData);
  };

  const handleSubmitForm = async (data: FormValues) => {
    let response;
    if (client) {
      response = await handleUpdateClient(data);
    } else {
      response = await handleAddClient(data);
    }

    if ("error" in response) {
      setError("root.serverError", {
        message:
          "O servidor retornou um erro, verifique os dados e tente novamente.",
      });
    }
  };

  if (allStatus === null) {
    listClientStatus();
    return <h3>Carregando...</h3>;
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="max-w-xl my-10">
      <Input
        {...register("name")}
        label="Nome"
        helperText={errors.name?.message}
        placeholder="Nome"
      />
      <Input
        {...register("email")}
        label="E-mail"
        helperText={errors.email?.message}
        placeholder="E-mail"
      />
      <Input
        {...register("cpf")}
        label="CPF"
        helperText={errors.cpf?.message}
        placeholder="CPF"
      />
      <Input
        {...register("phoneNumber")}
        label="Telefone"
        helperText={errors.phoneNumber?.message}
        placeholder="Telefone"
      />

      <Select
        {...register("status")}
        label="Status"
        helperText={errors.status?.message}
      >
        {allStatus.map((status) => (
          <option key={status.id} value={status.name}>
            {status.name}
          </option>
        ))}
      </Select>

      {errors.root?.serverError.message && (
        <p role="alert">{errors.root?.serverError.message}</p>
      )}

      <div className="flex justify-center gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar"}
        </Button>
        {backButton}
      </div>
    </form>
  );
}
