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
    const findClientCpf = await this.clientRepository.findByCpf(data.cpf);
    const findClientEmail = await this.clientRepository.findByEmail(data.email);
    const findClientPhone = await this.clientRepository.findByPhone(
      data.phoneNumber,
    );

    if (!!findClientCpf) {
      throw new ConflictException('Cpf de úsuario já cadastrado');
    }

    if (!!findClientEmail) {
      throw new ConflictException('Email de úsuario já cadastrado');
    }

    if (!!findClientPhone) {
      throw new ConflictException(
        'Número de telefone de úsuario já cadastrado',
      );
    }
  }
}

export default ClientService;
