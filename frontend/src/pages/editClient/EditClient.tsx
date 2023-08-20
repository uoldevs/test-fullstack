import React from 'react';
import { useLocation } from 'react-router-dom';
import ClientListingHeader from '../../components/clientListingHeader/ClientListingHeader';

function EditClient() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const clientId = queryParams.get('clientId');

  return (
    <div>
      <ClientListingHeader />
      {clientId}
    </div>
  );
}

export default EditClient;
