"use client";

import { Client } from "../../../services/clients/types";
import { Dialog } from "./Dialog";
import ClientEditDialog from "./ClientEditDialog";

interface ClientItemProps {
  client: Client;
}

export function ClientItem({ client }: ClientItemProps) {
  const statusColors = {
    Ativo: "bg-chateau-green-500",
    Inativo: "bg-valencia-600",
    "Aguardando ativação": "bg-galliano-500",
    Desativado: "bg-black-200",
  };
  const statusColor = statusColors[client.status?.name || "Desativado"];

  return (
    <li className="flex justify-between flex-wrap border border-black-100 my-5 p-3">
      <div className="flex-1">
        <span>{client.name}</span>
        <br />
        <span className="text-black-800">{client.email}</span>
      </div>
      <div className="flex-1">
        <span>{client.cpf}</span>
        <br />
        <span className="text-black-800">{client.phoneNumber}</span>
      </div>
      <span className="flex-1 flex items-center">
        <span className={`w-3 h-3 mr-1.5 rounded-full ${statusColor}`} />
        {client.status?.name}
      </span>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="w-32 border-2 rounded-md text-lg text-fire-bush-400 hover:text-black-50 hover:bg-fire-bush-400 border-fire-bush-400 active:bg-fire-bush-500 active:border-fire-bush-500"
          >
            Editar
          </button>
        </Dialog.Trigger>
        <ClientEditDialog client={client} />
      </Dialog.Root>
    </li>
  );
}
