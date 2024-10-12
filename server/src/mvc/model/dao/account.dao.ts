import { ICrud } from "./interfaces/ICrud";
import { Account, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import _ from "lodash";
import { IFindAccountByEmail } from "./interfaces/IFindByEmail";

export class AccountDAO implements ICrud<Account>, IFindAccountByEmail {
  private prisma = new PrismaClient();
  async findByEmail(email: string) {
    const cuenta = await this.prisma.account.findUnique({
      where: {
        email: email,
      },
    });

    if (!cuenta) {
      throw boom.notFound();
    }

    return cuenta;
  }

  async create(cuenta: Account) {
    const account = await this.prisma.account.create({
      data: cuenta,
    });

    return account;
  }

  async findByPk(id: string | number) {
    const account = await this.prisma.account.findUnique({
      where: {
        id: id as number,
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
