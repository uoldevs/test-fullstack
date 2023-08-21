import { NextFunction, Request, Response } from 'express';
import ClientService from '../services/ClientService';

class ClientController {
	async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const clients = await new ClientService().getAll();
			return res.status(200).json(clients);
		} catch (err) {
			next(err);
		}
	}

	async create(req: Request, res: Response, next: NextFunction) {
		try {
			await new ClientService().create(req.body);
			res.status(201).json({ message: 'Client Created'});
		} catch (err) {
			next(err);
		}
	}

	async update(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;
			await new ClientService().update(req.body, Number(id));
			res.status(200).json({ message: 'Client updated'});
		} catch (err) {
			next(err);
		}
	}
}

export default ClientController;



