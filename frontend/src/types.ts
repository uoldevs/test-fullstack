export type Status = 'Ativo' | 'Inativo' | 'Aguardando-ativação' | 'Desativado';
export type dbStatus = 'Ativo' | 'Inativo' | 'Aguardando ativação' | 'Desativado';

export type Client = {
  id?: number
  name: string
  email: string
  cpf: string
  phone: string
  status: Status
}

export type DbClient = {
  id?: number
  name: string
  email: string
  cpf: string
  phone: string
  status: dbStatus
}