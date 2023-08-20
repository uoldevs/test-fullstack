interface IClient {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  cellphone: string;
  status: 'ativação_pendente' | 'ativo' | 'inativo' | 'desativado';
}

export default IClient;