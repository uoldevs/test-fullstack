import IClientsStatus from '../../interfaces/IClientsStatus';

interface IClientContextType {
  clientsStatus: IClientsStatus[];
  fetchClientStatus: () => Promise<void>;
  clientsIsLoading: boolean;
}

export default IClientContextType;
