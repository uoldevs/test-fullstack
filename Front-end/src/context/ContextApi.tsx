import React, { createContext } from 'react';
import { useState } from 'react'

import AppContextInterface, {dataClientType} from '../interfaces/IContextApp';
import Api from '../services/resquest';

const DEFAULT_DATA = {
  dataClient: [{
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  cpf: '',
  cellphone: '',
  status: '',
  }],
  fetchClients: () => {},
}

const AppContext = createContext<AppContextInterface>(DEFAULT_DATA);

type propTypes = {
  children: React.ReactNode
}

const AppContextProvider = ({ children }: propTypes) => {
  
  const [dataClient, setDataClient] = useState<dataClientType>([])

  const fetchClients = async ():Promise<void> => {
    const requestData = await Api.getData('/');
    setDataClient(requestData)
  }

    const contextValue: AppContextInterface = {
      dataClient,
      fetchClients,
    };

    return (
      <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    );

}

export {AppContextProvider};
export default AppContext;