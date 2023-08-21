import { PrismaClient } from "@prisma/client";
import { Client } from "types";
import prisma from "../../prisma/prisma";

export default class ClientService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async create(clientData: Client) {
    const response = await this.prisma.client.create({
      data: {
        name: clientData.name,
        email: clientData.email,
        cpf: clientData.cpf,
        phone: clientData.phone,
        status: clientData.status,
      },
    });

    return response;
  }

  async update(clientData: Client) {
    return this.prisma.client.update({
      where: { id: clientData.id },
      data: {
        name: clientData.name,
        email: clientData.email,
        cpf: clientData.cpf,
        phone: clientData.phone,
        status: clientData.status,
      },
    });
  }

  async getAll() {
    return this.prisma.client.findMany();
  }
}

module.exports = ClientService;
