import Clients from "../../database/models/Clients";
import IClient from "../interfaces/IClient";
import {Op} from 'sequelize';

export default class ClientsService {
    constructor( private clientsModel = Clients) { }

    public getClients = async():Promise<Clients[]> => await this.clientsModel.findAll()

    public createClient = async(client:IClient):Promise<Clients> => await this.clientsModel.create({...client})

    public updateClient = async({id, ...client}:IClient):Promise<number | null> => {
        const [updatedRows] = await this.clientsModel.update(client, {
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        })
        if (updatedRows === 0 ) {
            return null;
        }
        return updatedRows
    }
}
