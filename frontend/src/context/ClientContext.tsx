import React, { createContext, useState } from 'react';
import ICLientContextProps from './interfaces/IClientContextProps';
import IClientContextType from './interfaces/IClientContextType';
import getAllClientsAndStatus from '../api/routes/clients/getAllClientsAndStatus';

const initialValue: IClientContextType = {
  clientsStatus: [
    {
      id: '',
      name: '',
      email: '',
      cpf: '',
      phoneNumber: '',
      status: {
        name: 'Ativo',
      },
    },
  ],
  fetchClientStatus: async () => {},
};

export const ClientContext = createContext<IClientContextType>(initialValue);

export const ClientProvider = ({ children }: ICLientContextProps) => {
  const [clientsStatus, setClientsStatus] = useState(initialValue.clientsStatus);

  const fetchClientStatus = async () => {
    const response = await getAllClientsAndStatus();

    setClientsStatus(response);
  };

  const context = {
    clientsStatus,
    fetchClientStatus,
  };

  return <ClientContext.Provider value={context}>{children}</ClientContext.Provider>;
};
