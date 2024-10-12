import { ICrud } from "./interfaces/ICrud";
import { Clase, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";

export class ClaseDAO implements ICrud<Clase> {
  private prisma = new PrismaClient();

  async create(clase: Clase) {
    const nuevaClase = await this.prisma.clase.create({
      data: clase,
    });
    return nuevaClase;
  }

  async findAll() {
    const clases = await this.prisma.clase.findMany();
    return clases;
  }

  async findByPk(id: string | number) {
    const clase = await this.prisma.clase.findUnique({
      where: {
        id: id as number,
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
}
