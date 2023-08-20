import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../db/prisma.service';
import { CreateClientDto } from './dto/CreateClient.dto';
import { UpdateClientDto } from './dto/UpdateClient.dto';

@Injectable()
class ClientRepository {
  private readonly selectClientReturn = {
    select: {
      id: true,
      name: true,
      email: true,
      cpf: true,
      phoneNumber: true,
      status: {
        select: { name: true },
      },
    },
  };

  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateClientDto) {
    return await this.prismaService.client.create({
      data: {
        cpf: data.cpf,
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
        status: {
          connectOrCreate: {
            create: {
              name: data.status.name,
            },
            where: {
              name: data.status.name,
            },
          },
        },
      },
      ...this.selectClientReturn,
    });
  }

  async findAllClientsAndStatus() {
    return this.prismaService.client.findMany({
      ...this.selectClientReturn,
    });
  }

  async findByCpfEmailAndPhoneNumber(
    cpf: string,
    email: string,
    phoneNumber: string,
  ) {
    return await this.prismaService.client.findFirst({
      where: {
        OR: [{ cpf }, { email }, { phoneNumber }],
      },
    });
  }

  async update(clientId: string, data: UpdateClientDto) {
    const status = data?.status?.name && {
      status: {
        connectOrCreate: {
          create: {
            name: data?.status?.name,
          },
          where: {
            name: data?.status?.name,
          },
        },
      },
    };

    const updatedClient = await this.prismaService.client.update({
      where: { id: clientId },
      data: {
        cpf: data.cpf,
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
        status: status?.status,
      },
      ...this.selectClientReturn,
    });

    return updatedClient;
  }

  async findById(clientId: string) {
    return await this.prismaService.client.findFirst({
      where: { id: clientId },
      ...this.selectClientReturn,
    });
  }
}

export default ClientRepository;
