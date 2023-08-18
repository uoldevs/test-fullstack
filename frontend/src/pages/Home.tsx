import { useEffect, useState } from "react";
import ClientCard from "../components/clientCard/ClientCard";
import HeaderClientDashbord from "../components/headerClientDashbord/HeaderClientDashbord";
import getClientsData from "../services/clientRequests";
import { Client } from "../types";
import './home.css'

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
    <div className="home-container">
      <HeaderClientDashbord/>
      <div>
        <p>Listagem de usuários</p>
        <p>Escolha um cliente para visualizar os detalhes</p>
        <div>
          <button>Novo cliente</button>
        </div>
      </div>

      {clientData && clientData.map((client)=> <ClientCard key={client.id} client={client}></ClientCard>)}
      <p>{`Exibindo ${clientData?.length} cliente(s)`}</p>
    </div>
  )
}

export default Home;