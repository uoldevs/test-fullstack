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
import { isValidPhoneNumber } from "libphonenumber-js/min";
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
      />
      <Input
        {...register("email")}
        label="E-mail"
        helperText={errors.email?.message}
      />
      <Input
        {...register("cpf", {
          setValueAs: (value) => value.replace(/\D/g, ""),
        })}
        mask="000.000.000-00"
        label="CPF"
        helperText={errors.cpf?.message}
      />
      <Input
        {...register("phoneNumber", {
          setValueAs: (value) => value.replace(/\D/g, ""),
        })}
        mask={["(00) 0000-0000", "(00) 00000-0000"]}
        label="Telefone"
        helperText={errors.phoneNumber?.message}
      />

      <Select
        {...register("status")}
        label="Status"
        helperText={errors.status?.message}
        defaultValue={client?.status?.name}
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
