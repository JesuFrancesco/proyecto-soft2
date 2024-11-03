import { DAO } from "./interfaces/GenericInterfaces";
import { Alumno, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import _ from "lodash";
import { IFindByAccountId } from "./interfaces/AccountInterfaces";

export class AlumnoDAO implements DAO<Alumno>, IFindByAccountId<Alumno> {
  private prisma = new PrismaClient();

  async findByAccountId(accountId: string): Promise<{
    id: number;
    nombre: string;
    edad: number;
    accountId: string | null;
    createdAt: Date;
    updatedAt: Date;
  }> {
    const alumno = await this.prisma.alumno.findUnique({
      where: {
        accountId: accountId,
      },
    });

    if (!alumno) throw boom.notFound();

    return alumno;
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

    if (!clases) {
      throw boom.notFound();
    }

    return clases;
  }

  async create(alumno: Alumno) {
    const nuevoAlumno = await this.prisma.alumno.create({
      data: alumno,
      include: {
        account: true,
        preferencias: true,
        clases: true,
        reviews: true,
      },
    });

    return nuevoAlumno;
  }

  async findAll() {
    const alumnos = await this.prisma.alumno.findMany({
      include: {
        account: true,
        preferencias: true,
        clases: true,
        reviews: true,
      },
    });
    return alumnos;
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
}
