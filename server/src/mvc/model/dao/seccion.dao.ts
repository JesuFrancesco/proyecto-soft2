import { IEduyachaDAO } from "./schema";
import { Seccion, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";

export class SeccionDAO implements IEduyachaDAO<Seccion> {
  private prisma = new PrismaClient();

  async create(seccion: Seccion) {
    const nuevaSeccion = await this.prisma.seccion.create({
      data: seccion,
    });
    return nuevaSeccion;
  }

  async findAll() {
    const secciones = await this.prisma.seccion.findMany();
    return secciones;
  }

  async findByPk(id: number) {
    const seccion = await this.prisma.seccion.findUnique({
      where: {
        id,
      },
    });

    if (!seccion) {
      throw boom.notFound();
    }

    return seccion;
  }

  async update(id: number, cambios: Partial<Seccion>) {
    const seccionCambiada = await this.prisma.seccion.update({
      where: {
        id,
      },
      data: cambios,
    });

    return seccionCambiada;
  }

  async deleteByPk(id: number) {
    const seccionEliminada = await this.prisma.seccion.delete({
      where: {
        id,
      },
    });
    return seccionEliminada;
  }
}
