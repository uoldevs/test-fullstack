import IModel from '../interfaces/IModel';

export default abstract class Service<T> {
  protected model: IModel<T>;
  constructor(model: IModel<T>) {
    this.model = model;
  }

  async create(obj: T): Promise<void> {
    await this.model.create(obj);
  }

  async list(): Promise<T[]> {
    return await this.model.list();
  }

  async update(id: number, obj: T): Promise<T> {
    return await this.model.update(id, obj);
  }
}
