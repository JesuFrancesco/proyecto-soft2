import { IEduyachaDAO } from "./interfaces/IEduyachaDAO";
import { Account, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { IFindByEmail } from "./interfaces/IFindByEmail";

export class AccountDAO
  implements IEduyachaDAO<Account>, IFindByEmail<Account>
{
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
    // const cuenta = await this.prisma.account.findUnique({
    //   where: {
    //     email: email,
    //   },
    //   include: {
    //     alumnos: true,
    //   },
    // });

    // const alumnos = cuenta?.alumnos;
    // return alumnos;
  }

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
