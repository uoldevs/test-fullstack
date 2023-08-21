import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: { Accept: 'application/json' },
})
