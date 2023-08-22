import React, { useContext } from 'react';
import IClientsStatus from '../../interfaces/IClientsStatus';
import ClientCard from '../clientCard/ClientCard';
import { ClientContext } from '../../context/ClientContext';
import Loading from '../loading/Loading';
import './style.css';

interface ClientListProps {
  clients: IClientsStatus[];
}

function ClientList({ clients }: ClientListProps) {
  const { clientsIsLoading } = useContext(ClientContext);
  return (
    <section className="client-list-container">
      {clientsIsLoading ? <Loading /> : clients.map(e => <ClientCard key={e.id} client={e} />)}
    </section>
  );
}

export default ClientList;
