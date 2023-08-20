import IClient from '../interfaces/IClient';
import ClientModel from '../models/ClientModel';
import Service from './Service';

export default class ClientService extends Service<IClient> {
  constructor(model = new ClientModel()) {
    super(model);
  }

  async create(obj: IClient): Promise<void> {
    await super.create(obj);
  }

  async list(): Promise<IClient[]> {
    return await super.list();
  }

  async update(id: number, obj: IClient): Promise<IClient> {
    return await super.update(id, obj);
  }
}
