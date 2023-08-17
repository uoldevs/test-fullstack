import { Injectable } from '@nestjs/common';
import ClientRepository from './client.repository';
import IClientStatus from 'src/interfaces/IClientStatus';

@Injectable()
class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async create(data: IClientStatus) {
    return await this.clientRepository.create(data);
  }

  async findAllClientsAndStatus() {
    return this.clientRepository.findAllClientsAndStatus();
  }
}

export default ClientService;
