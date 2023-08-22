import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

const getClients = async () => {
    try {
      const result = await api.get('/clients');
      return result.data;
    } catch (error) {
      return error.toJSON();
    }
};

const createClient = async ({ name, email, cpf, phone, status}) => {
    try {
      const result = await api.post('/clients', { name, email, cpf, phone, status});
      return result.data;
    } catch (error) {
      return error.toJSON();
    }
}

const updateClient = async ({ id, name, email, cpf, phone, status}) => {
    try {
        const result = await api.put('/clients/', { id, name, email, cpf, phone, status});
        console.log(result.data);
        return result.data;
    } catch (error) {
        return error.toJSON();
    }
}

export { getClients, createClient, updateClient };
