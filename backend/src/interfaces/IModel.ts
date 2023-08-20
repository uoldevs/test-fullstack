interface IModel<T> {
  create(obj: T): Promise<void>;
  list(): Promise<T[]>;
  update(id: number, obj: T): Promise<void>;
  findByCPF(cpf: string): Promise<T | null>;
  findById(id: number): Promise<T | null>;
}

export default IModel;
