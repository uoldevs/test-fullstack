import { ApiError } from '../types';
import { Client } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const headers = {
  'Content-Type': 'application/json'
}

export async function listClients(): Promise<Client[] | ApiError>{
  const response = await fetch(`${API_URL}/clients`);
  return response.json();
}

export async function createClient(client: Client): Promise<Client | ApiError>{
  const response = await fetch(`${API_URL}/clients`, {
    method: 'POST',
    headers,
    body: JSON.stringify(client)
  });
  return response.json();
}

export async function updateClient(id: number, client: Client): Promise<Client | ApiError>{
  const response = await fetch(`${API_URL}/clients/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(client)
  });
  return response.json();
}
