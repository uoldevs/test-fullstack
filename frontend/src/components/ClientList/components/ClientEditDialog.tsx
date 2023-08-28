import { Dialog } from "./Dialog";
import { Client } from "@/services/clients/types";
import ClientForm from "@/components/ClientForm";
import { ClientSchema } from "@/components/ClientForm/schema";

interface ClientEditDialogProps {
  client: Client;
  onSucess?: (data: ClientSchema) => void;
}

export default function ClientEditDialog({
  client,
  onSucess,
}: ClientEditDialogProps) {
  return (
    <Dialog.Content>
      <Dialog.Title className="text-lg">
        Edite as informações de {client.name}
      </Dialog.Title>
      <Dialog.Description className="text-black-800">
        Faça as alterações necessárias. Clique em editar quando terminar.
      </Dialog.Description>

      <ClientForm client={client} onSucess={onSucess}>
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
    </Dialog.Content>
  );
}
