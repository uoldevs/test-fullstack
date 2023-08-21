import { toast } from 'react-toastify';
import { IDataForm } from '../interfaces';
import { api } from './api';
import { AxiosError } from 'axios';

export async function createClient(dataForm: IDataForm) {
  try {
    const { status } = await api.post('/clients', dataForm);
    if (status === 201) {
      toast.success('Cliente criado com sucesso!');
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.warning(error.response?.data.message);
    }
    console.log(error);
  }
}

export async function updateClient(id: string, dataForm: IDataForm) {
  try {
    const { status } = await api.put(`/clients${id}`, dataForm);
    if (status === 204) {
      toast.success('Cliente atualizado com sucesso!');
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.warning(error.response?.data.message);
    }
    console.log(error);
  }
}

export async function listClients() {
  try {
    const { data } = await api.get('/clients');
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.warning(error.response?.data.message);
    }
    console.log(error);
  }
}

export async function findClient(id: string) {
  try {
    const { data } = await api.get(`/clients/${id}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.warning(error.response?.data.message);
    }
    console.log(error);
  }
}
