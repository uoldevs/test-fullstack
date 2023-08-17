import { Router } from 'express';
import ClientController from '../controllers/ClientController'; // Importe o controlador corretamente

const clientRoute = Router();
const controller = new ClientController();

clientRoute.get('/', controller.getAll); // Use o método correto do controlador

export default clientRoute;
