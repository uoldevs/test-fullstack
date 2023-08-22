import { ModelStatic } from 'sequelize';
import CustomerModel from '../../database/models/CustomerModel';
import ICustomerService from '../interfaces/ICustomerService';
import ICustomer from '../interfaces/ICustomer';

const noIdMsg = 'There is no customer with such id!';

export default class CustomerService implements ICustomerService {
  protected model: ModelStatic<CustomerModel> = CustomerModel;

  async getAll(): Promise<ICustomer[]> {
    const response = await this.model.findAll();
    return response;
  }

  async create(customer: ICustomer): Promise<ICustomer> {
    const { id } = await this.model.create({ ...customer });
    return { id, ...customer };
  }

  async update(id: number, data: Partial<ICustomer>): Promise<void> {
    const response = await this.model.findOne({ where: { id } });
    if (!response) throw new Error(noIdMsg);
    await this.model.update(data, { where: { id } });
  }

  async delete(id: number): Promise<void> {
    const response = await this.model.findOne({ where: { id } });
    if (!response) throw new Error(noIdMsg);
    await this.model.destroy({ where: { id } });
  }

  async getById(id: number): Promise<ICustomer> {
    const response = await this.model.findOne({ where: { id } });
    if (!response) throw new Error(noIdMsg);
    return response;
  }
}
