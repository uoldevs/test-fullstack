import { Status } from "../status/types";

export interface Client {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  statusId: number;
  status: Status;
}

export interface ClientCreationData extends Omit<Client, "id" | "status"> {}

export interface ClientWithStatusId extends Omit<Client, "status"> {}

export interface ClientWithStatus extends Omit<Client, "statusId"> {}
