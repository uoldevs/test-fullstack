import { Router } from 'express';
import ClientController from '../controllers/ClientController'; // Importe o controlador corretamente

const clientRoute = Router();
const controller = new ClientController();

clientRoute.get('/', controller.getAll);
clientRoute.post('/', controller.create); // Use o método correto do controlador

export default clientRoute;
