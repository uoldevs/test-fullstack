import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../db/prisma.service';
import { CreateClientDto } from './dto/CreateClient.dto';

@Injectable()
class ClientRepository {
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
    });
  }

  async findAllClientsAndStatus() {
    return this.prismaService.client.findMany({
      include: { status: { select: { name: true } } },
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
}

export default ClientRepository;
