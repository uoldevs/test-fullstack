import { NextFunction, Request, Response } from 'express';
import { clientSchema } from './schemas/ClientSchema';
import ClientService from '../services/ClientService';

export default class ClientController {
  constructor(private _service = new ClientService()) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      clientSchema.parse(req.body);
      await this._service.create(req.body);

      return res.status(201).json({ message: 'Client created' });
    } catch (error) {
      console.error('Error on create client', error);
      next(error);
    }
  }

  async list(_req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await this._service.list();

      return res.status(200).json(clients);
    } catch (error) {
      console.error('Error on list clients', error);
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      clientSchema.parse(req.body);
      const { id } = req.params;
      await this._service.update(Number(id), req.body);

      return res.status(204).end();
    } catch (error) {
      console.error('Error on update client', error);
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const client = await this._service.findById(Number(id));

      return res.status(200).json(client);
    } catch (error) {
      console.error('Error on find client', error);
      next(error);
    }
  }
}
