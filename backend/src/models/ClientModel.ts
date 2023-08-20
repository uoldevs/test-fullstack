import { RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import IClient from '../interfaces/IClient';
import IModel from '../interfaces/IModel';

export default class ClientModel implements IModel<IClient> {
  constructor(private connection = conn) {}

  async create(obj: IClient): Promise<void> {
    await this.connection.execute(
      'INSERT INTO ClientManager.Clients (name, email, CPF, phonenumber, status) VALUES (?,?,?,?,?)',
      [obj.name, obj.email, obj.CPF, obj.phonenumber, obj.status]
    );
  }

  async list(): Promise<IClient[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM ClientManager.Clients'
    );

    return result as IClient[];
  }

  async update(id: number, obj: IClient): Promise<IClient> {
    const [result] = (await this.connection.execute(
      'UPDATE ClientManager.Clients SET name=?, email=?, CPF=?, phonenumber=?, status=? WHERE id = ?',
      [obj.name, obj.email, obj.CPF, obj.phonenumber, obj.status, id]
    )) as RowDataPacket[];

    return result[0];
  }

  async findByCPF(cpf: string): Promise<IClient | null> {
    const [result] = (await this.connection.execute(
      'SELECT * FROM ClientManager.Clients WHERE CPF = ?',
      [cpf]
    )) as RowDataPacket[];

    return result[0];
  }
}
