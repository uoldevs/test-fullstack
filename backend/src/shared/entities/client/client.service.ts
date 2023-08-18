import { ConflictException, Injectable } from '@nestjs/common';
import ClientRepository from './client.repository';
import { CreateClientDto } from './dto/CreateClient.dto';
import { UpdateClientDto } from './dto/UpdateClient.dto';

@Injectable()
class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  public async create(data: CreateClientDto) {
    await this.checkConflicts(data.cpf, data.email, data.phoneNumber);

    return await this.clientRepository.create(data);
  }

  public async update(clientId: string, data: UpdateClientDto) {
    await this.checkConflicts(data.cpf, data.email, data.phoneNumber);

    return await this.clientRepository.update(clientId, data);
  }

  public async findAllClientsAndStatus() {
    return this.clientRepository.findAllClientsAndStatus();
  }

  public async checkConflicts(cpf: string, email: string, phone: string) {
    const client = await this.clientRepository.findByCpfEmailAndPhoneNumber(
      cpf,
      email,
      phone,
    );

    if (!!client) {
      throw new ConflictException('Dados de úsuario que já estão cadastrado');
    }
  }
}

export default ClientService;
