import { IEduyachaDAO } from "./schema";
import { Alumno, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";

export class AlumnoDAO implements IEduyachaDAO<Alumno> {
  private prisma = new PrismaClient();

  async create(alumno: Alumno) {
    const nuevoAlumno = await this.prisma.alumno.create({
      data: alumno,
    });
    return nuevoAlumno;
  }

  async findAll() {
    const alumnos = await this.prisma.alumno.findMany();
    return alumnos;
  }

  async findByPk(id: number) {
    const alumno = await this.prisma.alumno.findUnique({
      where: {
        id,
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
