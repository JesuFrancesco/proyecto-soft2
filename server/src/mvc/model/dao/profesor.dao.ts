import { DAO } from "./interfaces/GenericInterfaces";
import { Profesor, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { IFindByAccountId } from "./interfaces/AccountInterfaces";

export class ProfesorDAO implements DAO<Profesor>, IFindByAccountId<Profesor> {
  private prisma = new PrismaClient();

  async findByAccountId(id: string) {
    const profesor = await this.prisma.profesor.findUnique({
      where: {
        accountId: id,
      },
    });

    if (!profesor) throw boom.notFound();

    return profesor;
  }

  async create(profesor: Profesor) {
    const nuevoProfesor = await this.prisma.profesor.create({
      data: profesor,
    });
    return nuevoProfesor;
  }

  async findAll() {
    const profesores = await this.prisma.profesor.findMany({
      include: {
        especialidades: {
          include: {
            especialidad: true,
          },
        },
        profesorSubEspecialidades: {
          include: {
            subEspecialidad: true,
          },
        },
      },
    });
    return profesores;
  }

  async findByPk(id: number | string) {
    const profesor = await this.prisma.profesor.findUnique({
      where: {
        id: id as number,
      },
      select: {
        id: true,
        nombre: true,
        edad: true,
        biografia: true,
        imageUrl: true,
        especialidades: true,
        profesorSubEspecialidades: true,
        resenasAsociadas: true,

        clases: {
          select: {
            id: true,
            esVirtual: true,
            esGrupal: true,
            fechaClase: true,
            tema: {
              select: {
                subespecialidad: true,
              },
            },
          },
        },

        cuenta: {
          select: {
            email: true,
            phone: true,
          },
        },
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
