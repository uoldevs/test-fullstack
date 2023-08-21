import Clients from '../../database/models/Clients';
import ErrorHandler from '../ErrorHandler/handlerError';
import IClient from '../interfaces/IClient';
import { ENUM, Op } from 'sequelize';

export default class ClientsService {
  constructor(private clientsModel = Clients) {}

  public getClients = async (): Promise<Clients[]> =>
    await this.clientsModel.findAll();

  public createClient = async (client: IClient): Promise<Clients> => {
    return await this.clientsModel.create({ ...client });
  };

  public updateClient = async ({
    id,
    ...client
  }: IClient): Promise<number | null> => {
    const [updatedRows] = await this.clientsModel.update(client, {
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    if (updatedRows === 0) {
      return null;
    }
    return updatedRows;
  };

  public deleteClient = async (id: number): Promise<number | null> => {
    const deletedRows = await this.clientsModel.destroy({
      where: {
        id,
      },
    });
    if (deletedRows === 0) {
      return null;
    }
    return deletedRows;
  };
}
