import { ICrud } from "./interfaces/ICrud";
import { Profesor, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { IFindProfesorByEmail } from "./interfaces/IFindByEmail";

export class ProfesorDAO implements ICrud<Profesor>, IFindProfesorByEmail {
  private prisma = new PrismaClient();

  async create(profesor: Profesor) {
    const nuevoProfesor = await this.prisma.profesor.create({
      data: profesor,
    });
    return nuevoProfesor;
  }

  async findByEmail(email: string) {
    const cuenta = await this.prisma.account.findUnique({
      where: {
        email,
      },
      include: {
        profesor: true,
      },
    });

    if (!cuenta) {
      throw boom.notFound();
    }
    const { profesor } = cuenta;

    if (!profesor) {
      throw boom.notFound();
    }

    return profesor;
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

  async update(id: number, cambios: Partial<Profesor>) {
    const profesorCambiado = await this.prisma.profesor.update({
      where: {
        id,
      },
      data: cambios,
    });

    return profesorCambiado;
  }

  async deleteByPk(id: number) {
    const profesorEliminado = await this.prisma.profesor.delete({
      where: {
        id,
      },
    });
    return profesorEliminado;
  }
}
