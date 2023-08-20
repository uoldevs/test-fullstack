import Clients from "../../database/models/Clients";
import IClient from "../interfaces/IClient";

export default class ClientsService {
    constructor( private clientsModel = Clients) { }

    public getClients = async():Promise<Clients[]> => await this.clientsModel.findAll()

    public createClient = async(client:IClient):Promise<Clients> => await this.clientsModel.create({...client})
    
}