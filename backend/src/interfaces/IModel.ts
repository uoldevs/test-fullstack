interface IModel<T> {
  create(obj: T): Promise<void>;
  list(): Promise<T[]>;
  update(id: number, obj: T): Promise<T>;
  findByCPF(cpf: string): Promise<T | null>;
}

export default IModel;
