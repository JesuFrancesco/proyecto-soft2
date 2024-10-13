import { IReadable } from "./interfaces/GenericInterfaces";
import { PrismaClient, Pais } from "@prisma/client";
import boom from "@hapi/boom";

export class PaisDAO implements IReadable<Pais> {
  private prisma = new PrismaClient();
  async findAll() {
    const paises = await this.prisma.pais.findMany({
      include: {
        profesores: true,
      },
    });
    if (!paises) throw boom.notFound();
    return paises;
  }
  async findByPk(id: number | string) {
    const pais = await this.prisma.pais.findUnique({
      where: {
        id: id as string,
      },
      include: {
        profesores: true,
      },
    });
    if (!pais) throw boom.notFound();
    return pais;
  }
}
