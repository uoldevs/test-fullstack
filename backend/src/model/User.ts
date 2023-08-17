import { PrismaClient } from "@prisma/client";
import { User } from "types";

class UserModel {
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

}

module.exports = UserModel;
