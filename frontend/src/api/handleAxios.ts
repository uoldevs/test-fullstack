import axios from 'axios';

const handlesAxios = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API || 'http://localhost:3001',
});

export default handlesAxios;
