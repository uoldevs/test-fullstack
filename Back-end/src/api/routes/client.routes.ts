import { Router } from 'express'
import ClientController from '../controllers/clients.controller';

const router = Router();

const clientController = new ClientController();

router.get('/', clientController.getAllClients)

export default router;
