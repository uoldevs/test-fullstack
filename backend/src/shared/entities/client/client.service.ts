import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import ClientRepository from './client.repository';
import { CreateClientDto } from './dto/CreateClient.dto';
import { UpdateClientDto } from './dto/UpdateClient.dto';

@Injectable()
class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  public async create(data: CreateClientDto) {
    await this.checkCreateConflicts(data.cpf, data.email, data.phoneNumber);

    return await this.clientRepository.create(data);
  }

  public async update(clientId: string, data: UpdateClientDto) {
    await this.findById(clientId);

    await this.checkUpdateConflicts(
      data.cpf,
      data.email,
      data.phoneNumber,
      clientId,
    );

    return await this.clientRepository.update(clientId, data);
  }

  public async findAllClientsAndStatus() {
    return this.clientRepository.findAllClientsAndStatus();
  }

  public async checkCreateConflicts(cpf: string, email: string, phone: string) {
    const client = await this.clientRepository.findByCpfEmailAndPhoneNumber(
      cpf,
      email,
      phone,
    );

    if (!!client) {
      throw new ConflictException('Dados de úsuario que já estão cadastrado');
    }
  }

  public async checkUpdateConflicts(
    cpf: string,
    email: string,
    phone: string,
    clientId: string,
  ) {
    const client = await this.clientRepository.findAllByCpfEmailAndPhoneNumber(
      cpf,
      email,
      phone,
    );

    const idIsEqual = client.every((e) => e.id === clientId);

    if (!idIsEqual) {
      throw new ConflictException('Dados de úsuario que já estão cadastrado');
    }
  }

  async findById(clientId: string) {
    const client = await this.clientRepository.findById(clientId);

    if (client === null) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return client;
  }
}

export default ClientService;
