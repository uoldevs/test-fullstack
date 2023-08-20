import { Status } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function listStatus(): Promise<Status[]>{
  const response = await fetch(`${API_URL}/status`);
  return response.json();
}
