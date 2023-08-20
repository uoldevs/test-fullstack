import { Router, Request, Response } from 'express';
import CustomerService from '../services/CustomerService';
import CustomerController from '../controllers/CustomerController';

const customerRouter = Router();
const customerService = new CustomerService();
const customerController = new CustomerController(customerService);

customerRouter.get('/customers', (req: Request, res: Response) =>
  customerController.getAll(req, res));

export default customerRouter;
