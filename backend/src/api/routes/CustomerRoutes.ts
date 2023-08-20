import { Router, Request, Response } from 'express';
import CustomerService from '../services/CustomerService';
import CustomerController from '../controllers/CustomerController';
import validateCustomer from '../middlewares/validateCustomer';

const customerRouter = Router();
const customerService = new CustomerService();
const customerController = new CustomerController(customerService);

customerRouter.get('/customers', (req: Request, res: Response) =>
  customerController.getAll(req, res));

customerRouter.post('/customers', validateCustomer, (req: Request, res: Response) =>
  customerController.create(req, res));

customerRouter.put('/customers/:id', validateCustomer, (req: Request, res: Response) =>
  customerController.update(req, res));

export default customerRouter;
