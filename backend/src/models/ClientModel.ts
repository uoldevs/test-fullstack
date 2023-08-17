import { Client } from '../database/entities/Client';
import { Repository } from 'typeorm';
import { BaseEntity } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class ClientModel extends BaseEntity {
	constructor(@InjectRepository(Client) private readonly clientRepository: Repository<Client>) {
		super();
	}

	async getAllClients(): Promise<Client[]> {
		return await this.clientRepository.find();
	}
}

