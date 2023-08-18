/* eslint-disable @typescript-eslint/return-await */
import { PrismaClient } from "@prisma/client";
import { Client } from "types";
// import { Prisma } from "@prisma/client";
import prisma from '../../prisma/prisma';

export default class ClientService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async create(clientData: Client) {
    return await this.prisma.client.create({
      data: {
        name: clientData.name,
        email: clientData.email,
        cpf: clientData.cpf,
        phone: clientData.phone,
        status: clientData.status,
      },
    });
  }

  async update(clientData: Client) {
    return await this.prisma.client.update({
      where: { cpf: clientData.cpf },
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
    return await this.prisma.client.findMany();
  }

}

module.exports = ClientService;
