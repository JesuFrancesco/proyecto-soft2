import { DAO } from "./interfaces/GenericInterfaces";
import { Alumno, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import _ from "lodash";
import { IFindAlumnoByEmail } from "./interfaces/AlumnoInterfaces";

export class AlumnoDAO implements DAO<Alumno>, IFindAlumnoByEmail {
  private prisma = new PrismaClient();

  async findByEmail(email: string) {
    const cuenta = await this.prisma.account.findUnique({
      where: {
        email,
      },
      include: {
        alumno: {
          include: {
            clases: true,
            reviews: true,
            chats: true,
          },
        },
      },
    });

    if (!cuenta) {
      throw boom.notFound();
    }

    if (!cuenta?.alumno) {
      throw boom.notFound();
    }

    const { alumno } = cuenta;

    return alumno;
  }

  async findAlumnoClases(email: string) {
    const cuenta = await this.prisma.account.findUnique({
      where: {
        email,
      },
      include: {
        alumno: {
          include: {
            clases: {
              include: {
                clase: {
                  include: {
                    profesor: true,
                    tema: true,
                    materialClase: {
                      include: {
                        material: true,
                      },
                    },
                    alumnos: true,
                    sector: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!cuenta) {
      throw boom.notFound();
    }

    const { alumno } = cuenta;

    if (!alumno) {
      throw boom.notFound();
    }

    const { clases } = alumno;

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

    const alumnoCreated = _.omit(nuevoAlumno.account, ["passwordHash"]);
    return alumnoCreated;
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

  async update(id: number, cambios: Partial<Alumno>) {
    const alumnoCambiado = await this.prisma.alumno.update({
      where: {
        id,
      },
      data: cambios,
    });

    return alumnoCambiado;
  }

  async deleteByPk(id: number) {
    const alumnoEliminado = await this.prisma.alumno.delete({
      where: {
        id,
      },
    });
    return alumnoEliminado;
  }
}
