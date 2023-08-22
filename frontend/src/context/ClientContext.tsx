import React, { createContext, useState } from 'react';
import ICLientContextProps from './interfaces/IClientContextProps';
import IClientContextType from './interfaces/IClientContextType';
import getAllClientsAndStatus from '../api/routes/clients/getAllClientsAndStatus';

const initialValue: IClientContextType = {
  clientsStatus: [],
  fetchClientStatus: async () => {},
  clientsIsLoading: true,
};

export const ClientContext = createContext<IClientContextType>(initialValue);

export const ClientProvider = ({ children }: ICLientContextProps) => {
  const [clientsStatus, setClientsStatus] = useState(initialValue.clientsStatus);
  const [clientsIsLoading, setClientsIsLoading] = useState(true);

  const fetchClientStatus = async () => {
    try {
      const response = await getAllClientsAndStatus();

      setClientsStatus(response);
      setClientsIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const context = {
    clientsStatus,
    fetchClientStatus,
    clientsIsLoading,
  };

  return <ClientContext.Provider value={context}>{children}</ClientContext.Provider>;
};
