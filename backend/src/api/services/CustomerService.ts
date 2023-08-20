import { ModelStatic } from 'sequelize';
import CustomerModel from '../../database/models/CustomerModel';
import ICustomerService from '../interfaces/ICustomerService';
import ICustomer from '../interfaces/ICustomer';

export default class CustomerService implements ICustomerService {
  protected model: ModelStatic<CustomerModel> = CustomerModel;

  async getAll(): Promise<ICustomer[]> {
    const response = await this.model.findAll();
    return response;
  }
}
