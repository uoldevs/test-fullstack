"use client";

import React, { useContext } from "react";
import { Form } from "../Form";
import { Client } from "@/services/clientsAPI/clients/types";
import schema, { ClientSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientStatusContext } from "@/contexts/clientStatus";
import { createClient, updateClient } from "@/services/clientsAPI/clients";

type ClientFormProps = Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  "onInvalid"
> & {
  client?: Client;
  onSucess?: (data: ClientSchema) => void;
};

export default function ClientForm({
  client,
  onSucess,
  children,
  ...props
}: ClientFormProps) {
  const { clientStatus, listClientStatus } = useContext(clientStatusContext);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [serverError, setServerError] = React.useState("");

  const handleSubmitForm = async (data: ClientSchema) => {
    const clientData = {
      id: client?.id,
      name: data.name,
      email: data.email,
      cpf: data.cpf.replace(/\D/g, ""),
      phoneNumber: data.phoneNumber.replace(/\D/g, ""),
      statusId: clientStatus?.find((status) => status.name === data.status)?.id,
    };

    setIsSubmitting(true);

    const response = client
      ? await updateClient(Number(clientData.id), clientData)
      : await createClient(clientData);

    setIsSubmitting(false);

    if ("error" in response) {
      setServerError(
        "O servidor retornou um erro, verifique os dados e tente novamente."
      );
    } else {
      setServerError("");
      onSucess && onSucess(data);
    }
  };

  const defaultValues = client && {
    name: client.name,
    email: client.email,
    cpf: client.cpf,
    phoneNumber: client.phoneNumber,
    status: client.status?.name,
  };

  let buttonText;
  if (isSubmitting) buttonText = client ? "Editando..." : "Criando...";
  else buttonText = client ? "Editar" : "Criar";

  if (clientStatus === null) {
    listClientStatus();
    return <h3>Carregando...</h3>;
  }

  return (
    <Form.Root<ClientSchema>
      {...props}
      defaultValues={defaultValues}
      onValid={handleSubmitForm}
      resolver={zodResolver(schema)}
    >
      <Form.Input<ClientSchema> name="name" label="Nome" />
      <Form.Input<ClientSchema> name="email" label="E-mail" />
      <Form.Input<ClientSchema> name="cpf" label="CPF" mask="000.000.000-00" />
      <Form.Input<ClientSchema>
        name="phoneNumber"
        label="Telefone"
        mask={["(00) 0000-0000", "(00) 00000-0000"]}
      />
      <Form.Select<ClientSchema>
        name="status"
        label="Status"
        options={["", ...clientStatus.map((status) => status.name)]}
      />

      {serverError && <p role="alert">{serverError}</p>}

      <Form.Actions>
        <Form.Action type="submit" disabled={isSubmitting}>
          {buttonText}
        </Form.Action>
        {children}
      </Form.Actions>
    </Form.Root>
  );
}
