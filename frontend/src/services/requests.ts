import axios from 'axios';
import ICustomer from '../interfaces/ICustomer';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestCustomer = async (endpoint: string) => {
  const customer = await api.get(endpoint);
  return customer;
}

export const updateCustomer = async (endpoint: string, customer: Partial<ICustomer>) => {
  const response = await api.put(endpoint, customer);
  return response;
}

export const createCustomer = async (endpoint: string, customer: Partial<ICustomer>) => {
  const response = await api.post(endpoint, customer);
  return response;
}

export default api;
