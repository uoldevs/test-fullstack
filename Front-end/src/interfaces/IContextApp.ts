export type dataClientType = Array<{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  cellphone: string;
  status: string;
}>;

interface AppContextInterface {
  dataClient: dataClientType;
  fetchClients: () => void;
}

export default AppContextInterface;
