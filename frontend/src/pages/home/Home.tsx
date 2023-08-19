import React from 'react';
import PageHeader from '../../components/pageHeader/PageHeader';
import ClientListingHeader from '../../components/clientListingHeader/ClientListingHeader';
import './style.css';

function Home() {
  return (
    <main>
      <PageHeader />
      <section className="home-page-container">
        <div className="home-page-listing-container">
          <ClientListingHeader className="home-page-listing-header" />
          <div className="home-page-listing-view">
            <header className="home-page-listing-view-header">
              <h3>Listagem de usuários</h3>
              <p>Escolha um cliente para vizualizar os detalhes</p>
            </header>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
