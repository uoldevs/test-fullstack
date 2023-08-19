import IClientsStatus from '../../interfaces/IClientsStatus';

interface IClientContextType {
  clientsStatus: IClientsStatus[];
  fetchClientStatus: () => Promise<void>;
}

export default IClientContextType;
