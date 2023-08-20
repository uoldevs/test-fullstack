import { useEffect, useState } from "react";
import ClientCard from "../../components/clientCard/ClientCard";
import HeaderClientDashbord from "../../components/headerClientDashbord/HeaderClientDashbord";
import { getClientsData } from "../../services/clientRequests";
import { DbClient } from "../../types";
import './home.css'
import { useNavigate } from "react-router-dom";

function Home() {
  const [clientData, setClientData] = useState<DbClient[] | null>(null);
  const navigate = useNavigate();

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
      <div className="info-container">
        <div className="info">
          <p className="info-title">Listagem de usuários</p>
          <p className="info-p">Escolha um cliente para visualizar os detalhes</p>
        </div>
        <div className="info-button">
          <button onClick={() => navigate('/new-client')}>Novo cliente</button>
        </div>
      </div>

      {clientData && clientData.map((client)=> <ClientCard key={client.id} client={client}></ClientCard>)}
      <p>{`Exibindo ${clientData?.length} cliente(s)`}</p>
    </div>
  )
}

export default Home;