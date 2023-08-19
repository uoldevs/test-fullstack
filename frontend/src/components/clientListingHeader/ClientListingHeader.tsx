import React from 'react';
import { LuUser } from 'react-icons/lu';
import './style.css';

interface ClientListingHeaderProps {
  className?: string;
}

function ClientListingHeader({ className }: ClientListingHeaderProps) {
  return (
    <div className={className ? `client-listing-header-container ${className}` : 'client-listing-header-container'}>
      <LuUser className="client-listing-header-user-icon" />
      <p className="client-listing-header-content">Painel de Clientes</p>
    </div>
  );
}

export default ClientListingHeader;
