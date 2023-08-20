import ICustomer from './ICustomer';

export default interface ICustomerService {
  getAll(): Promise<ICustomer[]>;
  create(customer: ICustomer): Promise<ICustomer>;
}
