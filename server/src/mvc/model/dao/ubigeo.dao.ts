import { PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";

export class UbigeoDAO {
  private prisma = new PrismaClient();

  async findAllDepartamentos() {
    const paises = await this.prisma.departamento.findMany({
      orderBy: {
        name: "asc",
      },
    });

    if (!paises) throw boom.notFound();

    return paises;
  }

  async findProvinciasByDepartamento(departamentoId: string) {
    const provincias = await this.prisma.provincia.findMany({
      where: {
        departamentoId,
      },
      orderBy: {
        name: "asc",
      },
    });

    if (!provincias) throw boom.notFound();

    return provincias;
  }
  async findDistritosByDepartamentoAndProvincia(
    departamentoId: string,
    provinciaId: string
  ) {
    const distritos = await this.prisma.distrito.findMany({
      where: {
        departamento: {
          id: departamentoId,
        },

        provincia: {
          id: provinciaId,
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    if (!distritos) throw boom.notFound();

    return distritos;
  }
}
