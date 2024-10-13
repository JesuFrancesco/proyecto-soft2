import {
  ICreatable,
  DAO,
  IDeletable,
  IReadable,
} from "./interfaces/GenericInterfaces";
import { Account, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import _ from "lodash";
import {
  IFindAccountByEmail,
  IAccountCreatable,
} from "./interfaces/AccountInterfaces";

export class AccountDAO
  implements
    IReadable<Account>,
    IDeletable<Account>,
    IAccountCreatable,
    IFindAccountByEmail
{
  private prisma = new PrismaClient();

  async findByEmail(email: string) {
    const cuenta = await this.prisma.account.findUnique({
      where: {
        email: email,
      },
      include: {
        alumno: true,
        profesor: true,
      },
    });

    if (!cuenta) {
      throw boom.notFound();
    }

    return cuenta;
  }

  async createAlumnoAccount(data: Account) {
    const acc = await this.prisma.account.create({
      data,
      include: {
        alumno: true,
      },
    });

    return acc;
  }
  async createProfesorAccount(data: Account) {
    const acc = await this.prisma.account.create({
      data,
      include: {
        profesor: true,
      },
    });
    return acc;
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
