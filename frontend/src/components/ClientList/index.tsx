import { listClients } from "../../services/clients";
import { ClientItem } from "@/components/ClientList/components/ClientItem";

export default async function ClientList() {
  const clients = await listClients();

  if ("error" in clients) {
    return <p>Erro ao buscar clientes</p>;
  }

  return (
    <>
      <ul>
        {clients.map((client) => (
          <ClientItem key={client.id} client={client} />
        ))}
      </ul>
      <p>Exibindo {clients.length} clientes</p>
    </>
  );
}
