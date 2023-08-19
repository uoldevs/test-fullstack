import { Request, Response } from 'express'
import ClientsService from "../services/clients.service";

export default class ClientController {
    constructor(private _clientService = new ClientsService() ) {}

    public getAllClients = async (req: Request, res:Response) => {
        const clients = await this._clientService.getClients();
        return res.status(200).json(clients);
    }
}

