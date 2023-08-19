import ClientStatus from '../constants/ClientStatus';

interface IClientsStatus {
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  status: {
    name: ClientStatus;
  };
}

export default IClientsStatus;
