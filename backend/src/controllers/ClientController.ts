import { Request, Response } from 'express';
import ClientService from '../services/ClientService';

class ClientController {
	async getAll(req: Request, res: Response) {
		try {
			const clients = await new ClientService().getAll();
			return res.status(200).json(clients);
		} catch (err) {
			return;
		}
	}
}

export default ClientController;



