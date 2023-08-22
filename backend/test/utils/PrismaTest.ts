import { PrismaClient } from '@prisma/client';
import IClientStatus from 'src/interfaces/IClientStatus';

class PrismaTest {
  constructor(private prisma: PrismaClient) {}

  public async createManyClients(data: IClientStatus[]) {
    const clientsCreated = data.map((e) => {
      return this.prisma.client.create({
        data: {
          cpf: e.cpf,
          email: e.email,
          name: e.name,
          phoneNumber: e.phoneNumber,
          status: {
            connectOrCreate: {
              create: { name: e.status.name },
              where: { name: e.status.name },
            },
          },
        },
      });
    });

    await this.prisma.$transaction(clientsCreated);
  }

  public async deleteManyClients() {
    await this.prisma.client.deleteMany();
  }
}

export default PrismaTest;
