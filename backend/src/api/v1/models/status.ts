import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function listStatus() {
  const status = await prisma.status.findMany();
  await prisma.$disconnect();
  return status;
}

export default { listStatus };
