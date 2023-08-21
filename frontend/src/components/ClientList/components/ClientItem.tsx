import { Client } from "../../../services/clients/types";
import EditButton from "./EditButton";

interface ClientItemProps {
  client: Client;
}

enum ClientStatusColor {
  "Ativo" = "bg-chateau-green-500",
  "Inativo" = "bg-valencia-600",
  "Aguardando ativação" = "bg-galliano-500",
  "Desativado" = "bg-black-200",
}

export function ClientItem({ client }: ClientItemProps) {
  const clientStatusColor =
    ClientStatusColor[client.status?.name || "Desativado"];

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
        <span className={`w-3 h-3 mr-1.5 rounded-full ${clientStatusColor}`} />
        {client.status?.name}
      </span>
      <EditButton client={client} />
    </li>
  );
}
