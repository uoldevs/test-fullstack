import { Status } from '@/enum';

export type FormDataTypes = {
  name: string;
  email: string;
  taxId: string;
  phone: string;
  status?: Status;
};

export type CustomerTypes = {
  id: number;
} & FormDataTypes;

export type CustomerStoreTypes = {
  data: CustomerTypes[];
  customerToUpdate: CustomerTypes;
  created: boolean;
  updated: boolean;
};

export type ErrorCallbackTypes = (statusCode: number) => void;
