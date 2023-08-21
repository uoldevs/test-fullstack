import { Router, Request, Response } from 'express';
import CustomerService from '../services/CustomerService';
import CustomerController from '../controllers/CustomerController';
import validateCustomer from '../middlewares/validateCustomer';

const customerRouter = Router();
const customerService = new CustomerService();
const customerController = new CustomerController(customerService);

const url = '/customers';

customerRouter.get(url, (req: Request, res: Response) =>
  customerController.getAll(req, res));

customerRouter.get(`${url}/:id`, (req: Request, res: Response) =>
  customerController.getById(req, res));

customerRouter.post(url, validateCustomer, (req: Request, res: Response) =>
  customerController.create(req, res));

customerRouter.put(`${url}/:id`, validateCustomer, (req: Request, res: Response) =>
  customerController.update(req, res));

customerRouter.delete(`${url}/:id`, (req: Request, res: Response) =>
  customerController.delete(req, res));

export default customerRouter;
