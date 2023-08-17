import { Request, Response } from 'express';
import * as clientService from '../services/client';
import HttpStatus from '../enums/HttpStatus';

export async function createClient(req: Request, res: Response) {
  const { body: client } = req;
  const createdClient = await clientService.createClient(client);
  res.status(HttpStatus.CREATED).json(createdClient);
}

export async function updateClient(req: Request, res: Response) {
  const { id } = req.params;
  const { body: client } = req;
  const updatedClient = await clientService.updateClient(id, client);
  res.status(HttpStatus.OK).json(updatedClient);
}

export async function listClients(req: Request, res: Response) {
  const clients = await clientService.listClients();
  res.status(HttpStatus.OK).json(clients);
}
