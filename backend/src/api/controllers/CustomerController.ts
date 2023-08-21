import { Request, Response } from 'express';
import ICustomerService from '../interfaces/ICustomerService';

export default class CustomerController {
  private _service: ICustomerService;

  constructor(service: ICustomerService) {
    this._service = service;
  }

  async getAll(_req: Request, res: Response) {
    const response = await this._service.getAll();
    return res.status(200).json(response);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await this._service.getById(Number(id));
    return res.status(200).json(response);
  }

  async create(req: Request, res: Response) {
    const customer = req.body;
    const response = await this._service.create(customer);
    return res.status(201).json(response);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await this._service.update(Number(id), req.body);
      return res.status(200).json({ message: 'Customer updated successfully' });
    } catch (error) {
      return res.status(400).json({ message: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await this._service.delete(Number(id));
      return res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
      return res.status(400).json({ message: (error as Error).message });
    }
  }
}
