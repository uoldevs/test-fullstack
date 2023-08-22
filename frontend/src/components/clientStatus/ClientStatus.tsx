import React from 'react';
import TypeClientStatus from '../../interfaces/TypeClientStatus';
import './style.css';

interface ClientStatusCardProps {
  status: TypeClientStatus;
}

function ClientStatusCard({ status }: ClientStatusCardProps) {
  const statusColor = {
    Ativo: 'status-active',
    Inativo: 'status-inactive',
    'Aguardando ativação': 'status-awaiting-activation',
    Desativado: 'status-disabled',
  };

  return (
    <div className="client-card-status-container">
      <div className={`${statusColor[status]} client-status-color`} />
      <p>{status}</p>
    </div>
  );
}

export default ClientStatusCard;
