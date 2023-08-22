import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientListingHeader from '../../components/clientListingHeader/ClientListingHeader';
import './style.css';
import { ClientContext } from '../../context/ClientContext';
import ClientList from '../../components/clientList/ClientList';
import WebRoutes from '../../constants/WebRoutes';

function Home() {
  const { fetchClientStatus, clientsStatus } = useContext(ClientContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await fetchClientStatus();
    })();
  }, []);

  const createRedirect = () => {
    navigate(WebRoutes.CREATE_CLIENT);
  };

  return (
    <main>
      <section className="home-page-container">
        <div className="home-page-listing-container">
          <ClientListingHeader className="home-page-listing-header" />
          <div className="home-page-listing-view">
            <header className="home-page-listing-view-header">
              <div>
                <h3>Listagem de usuários</h3>
                <p>Escolha um cliente para vizualizar os detalhes</p>
              </div>
              <button type="button" onClick={createRedirect} className="home-page-listing-view-header-new-client-btn">
                Novo cliente
              </button>
            </header>
            <ClientList clients={clientsStatus} />
          </div>
          <p className="home-page-client-count">Exibindo {clientsStatus.length} número de clientes</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
