import { NextFunction, Request, Response } from 'express';
import { clientSchema } from './schemas/ClientSchema';
import ClientService from '../services/ClientService';

export const createClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    clientSchema.parse(req.body);

    const clientService = new ClientService();
    await clientService.create(req.body);

    return res.status(201).json({ message: 'Client created' });
  } catch (error) {
    console.error('Error on create client', error);
    next(error);
  }
};

export const listClients = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const clientService = new ClientService();
    const clients = await clientService.list();

    return res.status(200).json(clients);
  } catch (error) {
    console.error('Error on list clients', error);
    next(error);
  }
};

export const updateClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    clientSchema.parse(req.body);
    const { id } = req.params;

    const clientService = new ClientService();
    await clientService.update(Number(id), req.body);

    return res.status(204).end();
  } catch (error) {
    console.error('Error on update client', error);
    next(error);
  }
};
