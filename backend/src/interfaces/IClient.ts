interface IClient {
  name: string;
  email: string;
  CPF: string;
  phonenumber: string;
  status: 'Ativo' | 'Inativo' | 'Aguardando ativação' | 'Desativado';
}

export default IClient;
