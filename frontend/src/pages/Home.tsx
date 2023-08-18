import { useEffect, useState } from "react";
import ClientCard from "../components/clientCard/ClientCard";
import getClientsData from "../services/clientRequests";
import { Client } from "../types";

function Home() {
  const [clientData, setClientData] = useState<Client[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const clients = await getClientsData();
       setClientData(clients);
    }
    fetchData();
  }, [])

  return(
    <>
      {clientData && clientData.map((client)=> <ClientCard key={client.id} client={client}></ClientCard>)}
      <p>{`Exibindo ${clientData?.length} cliente(s)`}</p>
    </>
  )
}

export default Home;