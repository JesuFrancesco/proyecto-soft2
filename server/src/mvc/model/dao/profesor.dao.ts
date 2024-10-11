import { IEduyachaDAO } from "./schema";
import { Profesor, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";

export class ProfesorDAO implements IEduyachaDAO<Profesor> {
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

  async findByPk(id: number) {
    const profesor = await this.prisma.profesor.findUnique({
      where: {
        id,
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
