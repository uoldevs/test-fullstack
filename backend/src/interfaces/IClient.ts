interface IClient {
  name: string;
  email: string;
  cpf: string;
  phonenumber: string;
  status: 'Ativo' | 'Inativo' | 'Aguardando ativação' | 'Desativado';
}

export default IClient;
