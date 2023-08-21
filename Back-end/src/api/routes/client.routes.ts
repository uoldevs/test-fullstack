import { Router } from 'express';
import ClientController from '../controllers/clients.controller';
import MiddlewareValidation from '../middlewares/dataValidations';
const router = Router();

const clientController = new ClientController();
const middlewareValidation = new MiddlewareValidation();

router.get('/', clientController.getAllClients);
router.post(
  '/',
  middlewareValidation.creationValidator,
  clientController.createClient
);
router.put(
  '/',
  middlewareValidation.creationValidator,
  clientController.updateClient
);
router.delete(
  '/',
  middlewareValidation.validateDelete,
  clientController.deleteClient
);

export default router;
