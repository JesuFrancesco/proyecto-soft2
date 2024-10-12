import { IEduyachaDAO } from "./interfaces/IEduyachaDAO";
import { Account, Alumno, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { IFindByEmail } from "./interfaces/IFindByEmail";

export class AlumnoDAO implements IEduyachaDAO<Alumno>, IFindByEmail<Alumno> {
  private prisma = new PrismaClient();

  async findByEmail(email: string) {
    const cuenta = await this.prisma.account.findUnique({
      where: {
        email,
      },
      include: {
        alumno: true,
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
