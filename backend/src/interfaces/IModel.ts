interface IModel<T> {
  create(obj: T): Promise<void>;
  list(): Promise<T[]>;
  update(id: number, obj: T): Promise<T>;
}

export default IModel;
