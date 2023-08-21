import { Request, Response } from 'express';
import ClientService from '../services/ClientService';

class ClientController {
	async getAll(req: Request, res: Response) {
		try {
			const clients = await new ClientService().getAll();
			return res.status(200).json(clients);
		} catch (err) {
			return err;
		}
	}

	async create(req: Request, res: Response) {
		try {
			await new ClientService().create(req.body);
			res.status(201).json({ message: 'Client Created'});
		} catch (err) {
			return err;
		}
	}

	async update(req: Request, res: Response) {
		try {
			const { id } = req.params;
			await new ClientService().update(req.body, Number(id));
			res.status(200).json({ message: 'Client updated'});
		} catch (err) {
			return err;
		}
	}
}

export default ClientController;



