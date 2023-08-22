import TypeClientStatus from './TypeClientStatus';

interface IClientsStatus {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  status: {
    name: TypeClientStatus;
  };
}
export default IClientsStatus;
