import { PrismaClient } from '@prisma/client';
import clients from './data/clients';

const prisma = new PrismaClient();

async function main() {
  const clientsCreated = clients.map((e) => {
    return prisma.client.create({
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

  await prisma.$transaction(clientsCreated);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
