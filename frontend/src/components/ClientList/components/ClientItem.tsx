"use client";

import { useState } from "react";
import { ClientWithStatus } from "../../../services/clientAPI/endpoints/clients/types";
import { Dialog } from "./Dialog";
import ClientEditDialog from "./ClientEditDialog";
import { ClientSchema } from "@/components/ClientForm/schema";
import { Status } from "@/services/clientAPI/endpoints/status/types";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import StatusColors from "@/components/StatusColors";
import parsePhoneNumber from "libphonenumber-js";

interface ClientItemProps {
  client: ClientWithStatus;
}

export function ClientItem({ client }: ClientItemProps) {
  const [clientData, setClientData] = useState<ClientWithStatus>(client);

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

  const phoneNumber =
    parsePhoneNumber(clientData.phoneNumber, "BR")?.formatNational() ||
    clientData.phoneNumber;

  const cpf = clientData.cpf.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );

  return (
    <li className="flex justify-between flex-wrap border border-black-100 my-5 p-3">
      <div className="flex-1">
        <span>{clientData.name}</span>
        <br />
        <span className="text-black-800">{clientData.email}</span>
      </div>
      <div className="flex-1">
        <span>{cpf}</span>
        <br />
        <span className="text-black-800">{phoneNumber}</span>
      </div>
      <span className="flex-1 flex items-center">
        <StatusColors status={clientData.status.name} />
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
