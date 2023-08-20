import { PrismaClient, Client } from '@prisma/client';

const prisma = new PrismaClient();

export async function createClient(client: Client) {
  const createdClient = await prisma.client.create({
    data: client,
  });
  await prisma.$disconnect();
  return createdClient;
}

export async function updateClient(id: number, client: Client) {
  const updatedClient = await prisma.client.update({
    where: { id },
    data: client,
  });
  await prisma.$disconnect();
  return updatedClient;
}

export async function listClients() {
  const clients = await prisma.client.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      cpf: true,
      phoneNumber: true,
      status: true,
    },
  });
  await prisma.$disconnect();
  return clients;
}
