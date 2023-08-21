import axios from 'axios';

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

export default api;
