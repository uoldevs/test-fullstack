"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Client } from "@/services/clients/types";
import Button from "@/components/Form/components/Button";
import Form from "@/components/Form";

interface EditClientProps {
  client: Client;
}

const EditButton = ({ client }: EditClientProps) => {
  const formBackButton = (
    <Dialog.Close asChild>
      <Button type="button">Voltar</Button>
    </Dialog.Close>
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Editar</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Edite as informações de {client.name}</Dialog.Title>
          <Dialog.Description>
            Faça as alterações necessárias. Clique em salvar quando terminar.
          </Dialog.Description>

          <Form client={client} backButton={formBackButton} />

          <Dialog.Close asChild>
            <button aria-label="Close">
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditButton;
