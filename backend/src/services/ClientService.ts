import ClientModel from '../models/ClientModel';

export default class ClientService {
	async getAll() {
		return await new ClientModel().getAll();
	}
}



