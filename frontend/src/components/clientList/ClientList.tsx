import React from 'react';
import IClientsStatus from '../../interfaces/IClientsStatus';
import ClientCard from '../clientCard/ClientCard';

interface ClientListProps {
  clients: IClientsStatus[];
}

function ClientList({ clients }: ClientListProps) {
  return (
    <section>
      {clients.map(e => (
        <ClientCard key={e.id} client={e} />
      ))}
    </section>
  );
}

export default ClientList;
