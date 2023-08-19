import React from 'react';
import { useLocation } from 'react-router-dom';

function EditClient() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const clientId = queryParams.get('clientId');

  return <div>hello, {clientId}</div>;
}

export default EditClient;
