import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.status.upsert({
    where: { name: "Ativo" },
    update: {},
    create: {
      name: "Ativo",
    },
  });
  await prisma.status.upsert({
    where: { name: "Inativo" },
    update: {},
    create: {
      name: "Inativo",
    },
  });
  await prisma.status.upsert({
    where: { name: "Aguardando ativação" },
    update: {},
    create: {
      name: "Aguardando ativação",
    },
  });
  await prisma.status.upsert({
    where: { name: "Desativado" },
    update: {},
    create: {
      name: "Desativado",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
