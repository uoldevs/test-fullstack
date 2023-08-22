import { Router } from 'express';
import * as clientController from '../controllers/client';

const router = Router();

router.route('/')
  .post(clientController.createClient)
  .get(clientController.listClients);

router.route('/:id')
  .put(clientController.updateClient);

export default router;
