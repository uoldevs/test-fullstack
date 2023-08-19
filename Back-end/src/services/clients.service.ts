import Clients from "../database/models/Clients";

export default class ClientsService {
    constructor( private clientsModel = Clients) {

    }

    public getClients = async() => await this.clientsModel.findAll()
}