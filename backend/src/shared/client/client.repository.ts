import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import IClientStatus from 'src/interfaces/IClientStatus';

@Injectable()
class ClientRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: IClientStatus) {
    const { status: clientStatus, ...info } = data;

    return await this.prismaService.client.create({
      data: {
        ...info,
        status: {
          connectOrCreate: {
            create: {
              name: clientStatus.name,
            },
            where: {
              name: clientStatus.name,
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
}

export default ClientRepository;
