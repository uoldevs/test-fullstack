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

  async update(id: number, obj: T): Promise<void> {
    await this.model.update(id, obj);
  }

  async findByCPF(cpf: string): Promise<T | null> {
    return await this.model.findByCPF(cpf);
  }

  async findById(id: number): Promise<T | null> {
    return await this.model.findById(id);
  }
}
