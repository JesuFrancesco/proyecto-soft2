import { DAO } from "./interfaces/GenericInterfaces";
import { Clase, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";

export class ClaseDAO implements DAO<Clase> {
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

  async findByQuery(query: string) {
    const clases = await this.prisma.clase.findMany({
      where: {
        OR: [
          {
            tema: {
              especialidad: {
                especialidad: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
          },
          {
            tema: {
              subEspecialidad: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
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

    return clases;
  }

  async findByEspecialidades(especialidades: number[]) {
    const clases = await this.prisma.clase.findMany({
      where: {
        tema: {
          especialidadId: {
            in: especialidades,
          },
        },
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

  async update(id: string | number, cambios: Partial<Clase>) {
    const claseCambiada = await this.prisma.clase.update({
      where: {
        id: id as number,
      },
      data: cambios,
    });

    return claseCambiada;
  }

  async deleteByPk(id: string | number) {
    const claseEliminada = await this.prisma.clase.delete({
      where: {
        id: id as number,
      },
    });
    return claseEliminada;
  }

  // async matricularAlumnoEnClase(alumnoId: number, claseId: number) {
  //   const res = await this.prisma.alumnoClase.create({
  //     data: {
  //       alumnoId: alumnoId,
  //       claseId: claseId,
  //     },
  //   });

  //   return res;
  // }
}
