import { Dialog } from "./Dialog";
import { ClientWithStatus } from "@/services/clientAPI/endpoints/clients/types";
import ClientForm from "@/components/ClientForm";
import { ClientSchema } from "@/components/ClientForm/schema";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

interface ClientEditDialogProps {
  client: ClientWithStatus;
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
          <PrimaryButton bgColor="white" aria-label="Close">
            Cancelar
          </PrimaryButton>
        </Dialog.Close>
      </ClientForm>
    </Dialog.Content>
  );
}
