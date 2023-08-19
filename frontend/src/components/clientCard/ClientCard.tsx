import React from 'react';
import { GoPencil } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import IClientsStatus from '../../interfaces/IClientsStatus';
import ClientStatusCard from '../clientStatus/ClientStatus';
import formatCpf from '../../utils/formatCpf';
import formatPhoneNumber from '../../utils/formatPhoneNumber';
import './style.css';
import truncatedText from '../../utils/truncatedText';

interface ClientCardProps {
  client: IClientsStatus;
}

function ClientCard({ client }: ClientCardProps) {
  const navigate = useNavigate();

  const editRedirect = () => {
    navigate(`/client/edit?clientId=${client.id}`);
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
      <button className="client-card-edit-btn-pencil" onClick={editRedirect} type="button">
        <GoPencil className="client-card-edit-btn-icon-pencil" />
      </button>
      <button className="client-card-edit-btn" type="button" onClick={editRedirect}>
        Editar
      </button>
    </div>
  );
}

export default ClientCard;
