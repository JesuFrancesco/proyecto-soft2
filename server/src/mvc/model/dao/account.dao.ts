import { IDeletable, IReadable } from "./interfaces/GenericInterfaces";
import { Account, Alumno, PrismaClient, Profesor } from "@prisma/client";
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

  async setupAlumnoAccount(accountId: string, data: Partial<Alumno>) {
    const acc = await this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        alumno: data as any,
      },
      include: {
        alumno: true,
      },
    });

    return acc;
  }

  async setupProfesorAccount(accountId: string, data: Partial<Profesor>) {
    const acc = await this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        profesor: data as any,
      },
      include: {
        profesor: true,
      },
    });

    return acc;
  }

  async findByPk(id: string | number) {
    const account = await this.prisma.account.findUnique({
      where: {
        id: id as string,
      },
    });

    if (!account) {
      throw boom.notFound();
    }

    return account;
  }

  async update(id: string | number, cambios: Partial<Account>) {
    const cuentaCambiada = await this.prisma.account.update({
      where: {
        id: id as string,
      },
      data: cambios,
    });

    return cuentaCambiada;
  }

  async deleteByPk(id: string | number) {
    const cuentaEliminada = await this.prisma.account.delete({
      where: {
        id: id as string,
      },
    });
    return cuentaEliminada;
  }
}
