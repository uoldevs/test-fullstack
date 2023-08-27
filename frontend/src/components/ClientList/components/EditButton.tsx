"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Client } from "@/services/clients/types";
import ClientForm from "@/components/ClientForm";

interface EditClientProps {
  client: Client;
}

const EditButton = ({ client }: EditClientProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="w-32 border-2 rounded-md text-lg text-fire-bush-400 hover:text-black-50 hover:bg-fire-bush-400 border-fire-bush-400 active:bg-fire-bush-500 active:border-fire-bush-500">
          Editar
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black-50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-black-50 p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-auto">
          <Dialog.Title className="text-lg">
            Edite as informações de {client.name}
          </Dialog.Title>
          <Dialog.Description className="text-black-800">
            Faça as alterações necessárias. Clique em editar quando terminar.
          </Dialog.Description>

          <ClientForm client={client}>
            <Dialog.Close asChild>
              <button
                type="button"
                className="flex justify-center items-center w-36 border-2 p-2 rounded-md text-lg text-fire-bush-400 hover:text-black-50 hover:bg-fire-bush-400 border-fire-bush-400 active:bg-fire-bush-500 active:border-fire-bush-500"
                aria-label="Close"
              >
                Cancelar
              </button>
            </Dialog.Close>
          </ClientForm>

          <Dialog.Close asChild>
            <button
              className="text-valencia-700 hover:bg-valencia-200 absolute top-[10px] right-[10px] h-6 w-6 appearance-none items-center justify-center rounded-md focus:shadow-[0_0_0_2px]focus:shadow-valencia-500 focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditButton;
