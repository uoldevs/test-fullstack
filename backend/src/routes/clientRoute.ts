import { Router } from 'express';
import ClientController from '../controllers/ClientController'; 
import validateClient from '../middlewares/validateclient';

const clientRoute = Router();
const controller = new ClientController();

clientRoute.get('/', controller.getAll);
clientRoute.post('/', 
	(req, res, next) => validateClient(req, res, next),
	(req, res) => controller.create(req, res)); 
clientRoute.put('/:id', 
	(req, res, next) => validateClient(req, res, next),
	(req, res) => controller.update(req, res));

export default clientRoute;
