import { IEduyachaDAO } from "./schema";
import { Account, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";

export class AccountDAO implements IEduyachaDAO<Account> {
  private prisma = new PrismaClient();

  async create(cuenta: Account) {
    const account = await this.prisma.account.create({
      data: cuenta,
    });

    return account;
  }

  async findAll() {
    const accounts = await this.prisma.account.findMany();
    return accounts;
  }

  async findByPk(id: number) {
    const account = await this.prisma.account.findUnique({
      where: {
        id,
      },
    });

    if (!account) {
      throw boom.notFound();
    }

    return account;
  }
  async update(id: number, cambios: Partial<Account>) {
    const cuentaCambiada = await this.prisma.account.update({
      where: {
        id,
      },
      data: cambios,
    });

    return cuentaCambiada;
  }

  async deleteByPk(id: number) {
    const cuentaEliminada = await this.prisma.account.delete({
      where: {
        id,
      },
    });
    return cuentaEliminada;
  }
}
