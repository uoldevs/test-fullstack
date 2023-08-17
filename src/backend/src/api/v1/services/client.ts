import { Client } from '@prisma/client';
import * as clientModel from '../models/client';

export async function createClient(client: Client) {
  return clientModel.createClient(client);
}

export async function updateClient(id: string, client: Client) {
  return clientModel.updateClient(Number(id), client);
}

export async function listClients() {
  return clientModel.listClients();
}
