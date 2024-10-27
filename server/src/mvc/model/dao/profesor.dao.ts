import { DAO } from "./interfaces/GenericInterfaces";
import { Profesor, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { IFindByAccountId } from "./interfaces/AccountInterfaces";

export class ProfesorDAO implements DAO<Profesor>, IFindByAccountId<Profesor> {
  async findByAccountId(
    arg0: string
  ): Promise<{
    id: number;
    nombre: string;
    edad: number;
    accountId: string | null;
    createdAt: Date;
    updatedAt: Date;
    paisId: string;
  }> {
    const profesor = await this.prisma.profesor.findUnique({
      where: {
        accountId: arg0,
      },
    });

    if (!profesor) throw boom.notFound();

    return profesor;
  }
  private prisma = new PrismaClient();

  async create(profesor: Profesor) {
    const nuevoProfesor = await this.prisma.profesor.create({
      data: profesor,
    });
    return nuevoProfesor;
  }

  async findAll() {
    const profesores = await this.prisma.profesor.findMany();
    return profesores;
  }

  async findByPk(id: number | string) {
    const profesor = await this.prisma.profesor.findUnique({
      where: {
        id: id as number,
      },
    });

    if (!profesor) {
      throw boom.notFound();
    }

    return profesor;
  }

  async update(id: string | number, cambios: Partial<Profesor>) {
    const profesorCambiado = await this.prisma.profesor.update({
      where: {
        id: id as number,
      },
      data: cambios,
    });

    return profesorCambiado;
  }

  async deleteByPk(id: string | number) {
    const profesorEliminado = await this.prisma.profesor.delete({
      where: {
        id: id as number,
      },
    });
    return profesorEliminado;
  }
}
