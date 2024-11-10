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

  async updateAccountCountry(accountId: string, paisId: any) {
    const acc = await this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        paisId: {
          set: paisId,
        },
      },
    });

    return acc;
  }

  async updateAccountPeruUbigeoLocation(accountId: string, data: any) {
    const acc = await this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        departamentoId: {
          set: data.departamentoId,
        },
        provinciaId: {
          set: data.provinciaId,
        },
        distritoId: {
          set: data.distritoId,
        },
      },
    });

    return acc;
  }

  async setupAlumnoAccount(accountId: string, data: any) {
    const { preferencias } = data as { preferencias: number[] };

    const updatedAccount = await this.prisma.account.update({
      where: {
        id: accountId,
      },

      data: {
        alumno: {
          create: {
            edad: data.edad,
            nombre: data.nombre,
          },
        },
      },

      include: {
        alumno: true,
      },
    });

    const { alumno } = updatedAccount;

    if (alumno !== null && preferencias.length !== 0) {
      await this.prisma.alumnoPreferencia.createMany({
        data: preferencias.map((p) => ({
          alumnoId: alumno.id,
          preferenciaId: p,
        })),
      });
    }

    return updatedAccount;
  }

  async setupProfesorAccount(accountId: string, data: any) {
    const acc = await this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        profesor: {
          create: {
            ...data,
          },
        },
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
