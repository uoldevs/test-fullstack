/* eslint-disable @typescript-eslint/return-await */
import { PrismaClient } from "@prisma/client";
import { User } from "types";

export default class UserService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(userData: User) {
    return await this.prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        cpf: userData.cpf,
        status: userData.status,
      },
    });
  }

  async updateUser(userData: User) {
    return await this.prisma.user.update({
      where: { cpf: userData.cpf },
      data: {
        name: userData.name,
        email: userData.email,
        cpf: userData.cpf,
        status: userData.status,
      },
    });
  }

  async getAll() {
    return await this.prisma.user.findMany();
  }

}

module.exports = UserService;