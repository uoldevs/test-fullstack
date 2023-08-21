import { Client } from "../../../services/clients/types";
import EditButton from "./EditButton";

interface ClientItemProps {
  client: Client;
}

export function ClientItem({ client }: ClientItemProps) {
  return (
    <li>
      <div>
        <span>{client.name}</span>
        <span>{client.cpf}</span>
      </div>
      <div>
        <span>{client.email}</span>
        <span>{client.phoneNumber}</span>
      </div>
      <span>{client.status?.name}</span>
      <EditButton client={client} />
    </li>
  );
}
