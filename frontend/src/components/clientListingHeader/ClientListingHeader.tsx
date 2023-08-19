import React from 'react';
import { LuUser } from 'react-icons/lu';
import './style.css';

function ClientListingHeader() {
  return (
    <div className="client-listing-header-container">
      <LuUser className="client-listing-header-user-icon" />
      <p className="client-listing-header-content">Painel de Clientes</p>
    </div>
  );
}

export default ClientListingHeader;
