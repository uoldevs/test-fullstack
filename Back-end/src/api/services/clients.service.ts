import { Model } from "sequelize";
import Clients from "../../database/models/Clients";

export default class ClientsService {
    constructor( private clientsModel = Clients) { }

    public getClients = async():Promise<Clients[]> => await this.clientsModel.findAll()
}