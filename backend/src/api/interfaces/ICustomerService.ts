import ICustomer from './ICustomer';

export default interface ICustomerService {
  getAll(): Promise<ICustomer[]>;
  getById(id: number): Promise<ICustomer>;
  create(customer: ICustomer): Promise<ICustomer>;
  update(id: number, data: Partial<ICustomer>): Promise<void>;
  delete(id: number): Promise<void>;
}
