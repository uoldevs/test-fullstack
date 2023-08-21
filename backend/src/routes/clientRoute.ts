import { Router } from 'express';
import ClientController from '../controllers/ClientController'; 
import validateClient from '../middlewares/validateclient';

const clientRoute = Router();
const controller = new ClientController();

clientRoute.get('/', 
	(req, res, next) => controller.getAll(req, res, next));
clientRoute.post('/', 
	(req, res, next) => validateClient(req, res, next),
	(req, res, next) => controller.create(req, res, next)); 
clientRoute.put('/:id', 
	(req, res, next) => validateClient(req, res, next),
	(req, res, next) => controller.update(req, res, next));

export default clientRoute;
