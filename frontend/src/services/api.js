import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_LINK || "http://localhost:3001/"

export const api = axios.create({
  baseURL: url,
});

export const getUsers = async () => {
  try {
    const { data } = await api.get('/users');
    return data;
  } catch (error) {
    console.log(error)
    const axiosError = error
    return axiosError.response?.data;
  }
}

export const getUsersById = async (id) => {
  try {
    const { data } = await api.get(`/users/${id}`);
    return data;
  } catch (error) {
    console.log(error)
    const axiosError = error
    return axiosError.response?.data;
  }
}

export const createNewUser = async (userData) => {
  try {
    const body = {
      ...userData
    }
    const { data } = await api.post('/users', body);
    return data;
  } catch (error) {
    console.log(error)
    const axiosError = error
    return axiosError.response?.data;
  }
}

export const updateUser = async (userData, id) => {
  try {
    const body = {
      ...userData
    }
    const { data } = await api.put(`/users/${id}`, body);
    return data;
  } catch (error) {
    console.log(error)
    const axiosError = error
    return axiosError.response?.data;
  }
}
