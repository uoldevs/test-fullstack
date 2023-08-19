import { Request, Response } from 'express';
import ClientsService from '../services/clients.service';
import Clients from '../../database/models/Clients';
import ErrorHandler from '../ErrorHandler/handlerError';

export default class ClientController {
  constructor(private _clientService = new ClientsService()) {}

  public getAllClients = async (
    _req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const clients: Clients[] = await this._clientService.getClients();
      if (clients.length === 0 ) {
        throw new ErrorHandler(404, 'Nenhum cliente foi achado');
      }
      return res.status(200).json(clients);
    } catch (err) {
      throw new ErrorHandler(500, `${err}`);
    }
  };
}
