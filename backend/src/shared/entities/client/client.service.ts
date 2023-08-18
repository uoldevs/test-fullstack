import { ConflictException, Injectable } from '@nestjs/common';
import ClientRepository from './client.repository';
import { CreateClientDto } from './dto/CreateClient.dto';

@Injectable()
class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  public async create(data: CreateClientDto) {
    await this.checkConflicts(data);

    return await this.clientRepository.create(data);
  }

  public async findAllClientsAndStatus() {
    return this.clientRepository.findAllClientsAndStatus();
  }

  public async checkConflicts(data: CreateClientDto) {
    const client = await this.clientRepository.findByCpfEmailAndPhoneNumber(
      data.cpf,
      data.email,
      data.phoneNumber,
    );

    if (!!client) {
      throw new ConflictException('Úsuario já cadastrado');
    }
  }
}

export default ClientService;
