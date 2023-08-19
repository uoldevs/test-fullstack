import React from 'react';
import { GoPencil } from 'react-icons/go';
import IClientsStatus from '../../interfaces/IClientsStatus';
import ClientStatusCard from '../clientStatus/ClientStatus';
import formatCpf from '../../utils/formatCpf';
import formatPhoneNumber from '../../utils/formatPhoneNumber';
import './style.css';

interface ClientCardProps {
  client: IClientsStatus;
}

function ClientCard({ client }: ClientCardProps) {
  const truncatedText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="client-card">
      <div className="client-card-content">
        <span className="client-card-name-email-container">
          <p title={client.name}>{truncatedText(client.name, 30)}</p>
          <p title={client.email}>{truncatedText(client.email, 30)}</p>
        </span>
        <span className="client-card-cpf-phoneNumber-container">
          <p>{formatCpf(client.cpf)}</p>
          <p>{formatPhoneNumber(client.phoneNumber)}</p>
        </span>
        <ClientStatusCard status={client.status.name} />
      </div>
      <button className="client-card-edit-btn-pencil">
        <GoPencil className="client-card-edit-btn-icon-pencil" />
      </button>
      <button className="client-card-edit-btn">Editar</button>
    </div>
  );
}

export default ClientCard;
