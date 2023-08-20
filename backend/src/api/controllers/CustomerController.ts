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
}