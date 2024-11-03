import { DAO, IReadable } from "./interfaces/GenericInterfaces";
import { PrismaClient, Especialidad } from "@prisma/client";

export class EspecialidadDAO implements IReadable<Especialidad> {
  private prisma = new PrismaClient();

  async findByPk(arg0: string | number) {
    const preferencias = await this.prisma.especialidad.findUnique({
      where: {
        id: arg0 as number,
      },
    });
    return preferencias;
  }

  async findAll() {
    const preferencias = await this.prisma.especialidad.findMany({
      orderBy: {
        especialidad: "asc",
      },
    });
    return preferencias;
  }
}
