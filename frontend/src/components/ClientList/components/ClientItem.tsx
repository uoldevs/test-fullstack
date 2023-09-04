"use client";

import { useState } from "react";
import { ClientWithStatus } from "../../../services/clientAPI/endpoints/clients/types";
import { Dialog } from "./Dialog";
import ClientEditDialog from "./ClientEditDialog";
import { ClientSchema } from "@/components/ClientForm/schema";
import { Status } from "@/services/clientAPI/endpoints/status/types";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

interface ClientItemProps {
  client: ClientWithStatus;
}

export function ClientItem({ client }: ClientItemProps) {
  const [clientData, setClientData] = useState<ClientWithStatus>(client);

  const statusColors: Record<string, string> = {
    Ativo: "bg-chateau-green-500",
    Inativo: "bg-valencia-600",
    "Aguardando ativação": "bg-galliano-500",
    Desativado: "bg-black-200",
  };
  const statusColor = statusColors[clientData.status.name];

  const handleEditClientOnSucess = (data: ClientSchema) => {
    setClientData({
      ...clientData,
      ...data,
      status: {
        id: clientData.status.id,
        name: data.status as Status["name"],
      },
    });
  };

  return (
    <li className="flex justify-between flex-wrap border border-black-100 my-5 p-3">
      <div className="flex-1">
        <span>{clientData.name}</span>
        <br />
        <span className="text-black-800">{clientData.email}</span>
      </div>
      <div className="flex-1">
        <span>{clientData.cpf}</span>
        <br />
        <span className="text-black-800">{clientData.phoneNumber}</span>
      </div>
      <span className="flex-1 flex items-center">
        <span className={`w-3 h-3 mr-1.5 rounded-full ${statusColor}`} />
        {clientData.status.name}
      </span>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <PrimaryButton bgColor="white">Editar</PrimaryButton>
        </Dialog.Trigger>
        <ClientEditDialog
          client={clientData}
          onSucess={handleEditClientOnSucess}
        />
      </Dialog.Root>
    </li>
  );
}
