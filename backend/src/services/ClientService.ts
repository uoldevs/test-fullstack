import BadRequest from '../Errors/BadRequest';
import IClient from '../interfaces/IClient';
import ClientModel from '../models/ClientModel';
import Service from './Service';

export default class ClientService extends Service<IClient> {
  constructor(model = new ClientModel()) {
    super(model);
  }

  async create(obj: IClient): Promise<void> {
    const client = await super.findByCPF(obj.CPF);
    if (client) {
      throw new BadRequest('CPF already registered');
    }

    await super.create(obj);
  }

  async list(): Promise<IClient[]> {
    return await super.list();
  }

  async update(id: number, obj: IClient): Promise<IClient> {
    return await super.update(id, obj);
  }
}
