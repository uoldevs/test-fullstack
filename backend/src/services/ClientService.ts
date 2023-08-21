import IClient from '../interfaces/IClient';
import ClientModel from '../models/ClientModel';

export default class ClientService {
	async getAll() {
		try {
			return await new ClientModel().getAll();
		} catch (error) {
			throw new Error('Erro ao buscar clientes');
		}
	}

	async create(client: IClient) {
		try {
			return await new ClientModel().create(client);
		} catch (error) {
			throw new Error('Erro ao criar o cliente');
		}
	}

	async update(client: IClient, id: number) {
		try {
			return await new ClientModel().update(client, id);
		} catch (error) {
			throw new Error('Erro ao editar o cliente');
		}
	}
}



