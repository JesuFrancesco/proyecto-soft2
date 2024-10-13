import { DAO } from "./interfaces/GenericInterfaces";
import { Clase, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { IMatriculable } from "./interfaces/ClaseInterfaces";

export class ClaseDAO implements DAO<Clase>, IMatriculable {
  private prisma = new PrismaClient();

  async create(clase: Clase) {
    const nuevaClase = await this.prisma.clase.create({
      data: clase,
    });
    return nuevaClase;
  }

  async findAll() {
    const clases = await this.prisma.clase.findMany({
      include: {
        tema: true,
        profesor: true,
        sector: true,
        materialClase: {
          include: {
            material: true,
          },
        },
      },
    });
    return clases;
  }

  async findByPk(id: string | number) {
    const clase = await this.prisma.clase.findUnique({
      where: {
        id: id as number,
      },
      include: {
        tema: true,
        profesor: true,
        sector: true,
        alumnos: true,
        materialClase: {
          include: {
            material: true,
          },
        },
      },
    });

    if (!clase) {
      throw boom.notFound();
    }

    return clase;
  }

  async update(id: number, cambios: Partial<Clase>) {
    const claseCambiada = await this.prisma.clase.update({
      where: {
        id,
      },
      data: cambios,
    });

    return claseCambiada;
  }

  async deleteByPk(id: number) {
    const claseEliminada = await this.prisma.clase.delete({
      where: {
        id,
      },
    });
    return claseEliminada;
  }

  async matricularAlumnoEnClase(alumnoId: number, claseId: number) {
    const res = await this.prisma.alumnoClase.create({
      data: {
        alumnoId: alumnoId,
        claseId: claseId,
      },
    });

    return res;
  }
}
