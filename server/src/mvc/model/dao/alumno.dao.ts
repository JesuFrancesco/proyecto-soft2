import { DAO } from "./interfaces/GenericInterfaces";
import { Alumno, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import _ from "lodash";
import { IFindByAccountId } from "./interfaces/AccountInterfaces";
import { IMatriculable } from "./interfaces/ClaseInterfaces";

export class AlumnoDAO
  implements DAO<Alumno>, IFindByAccountId<Alumno>, IMatriculable
{
  private prisma = new PrismaClient();

  async findByAccountId(accountId: string) {
    const alumno = await this.prisma.alumno.findUnique({
      where: {
        accountId: accountId,
      },
      include: {
        preferencias: true,
      },
    });

    if (!alumno) throw boom.notFound();

    return alumno;
  }

  async findByPk(id: number | string) {
    const alumno = await this.prisma.alumno.findUnique({
      where: {
        id: id as number,
      },
    });

    if (!alumno) {
      throw boom.notFound();
    }

    return alumno;
  }

  async update(id: string | number, cambios: Partial<Alumno>) {
    const alumnoCambiado = await this.prisma.alumno.update({
      where: {
        id: id as number,
      },
      data: cambios,
    });

    return alumnoCambiado;
  }

  async deleteByPk(id: string | number) {
    const alumnoEliminado = await this.prisma.alumno.delete({
      where: {
        id: id as number,
      },
    });
    return alumnoEliminado;
  }

  async findAlumnoClases(alumnoId: number) {
    const clases = await this.prisma.alumnoClase.findMany({
      where: {
        alumnoId: {
          equals: alumnoId,
        },
      },
      include: {
        clase: {
          include: {
            claseReviews : true,
            materialClase: {
              include: {
                clase: true,
                material: true,
              },
            },
            profesor: true,
            sector: true,
            tema: true,
          },
        },
      },
    });

    return clases;
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

  async create(alumno: Alumno) {
    const nuevoAlumno = await this.prisma.alumno.create({
      data: alumno,
      include: {
        account: true,
        preferencias: true,
        clases: true,
        alumnoProfesorReviews: true,
      },
    });

    return nuevoAlumno;
  }
}
