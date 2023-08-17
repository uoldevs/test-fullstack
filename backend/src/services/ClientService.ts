import IClient from '../interfaces/IClient';
import ClientModel from '../models/ClientModel';

export default class ClientService {
	async getAll() {
		return await new ClientModel().getAll();
	}

	async create(client: IClient) {
		return await new ClientModel().create(client);
	}

	async update(client: IClient, id: number) {
		return await new ClientModel().update(client, id);
	}
}



