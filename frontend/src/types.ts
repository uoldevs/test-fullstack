import { ChangeEvent } from "react";

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


export interface MaskedInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string
}