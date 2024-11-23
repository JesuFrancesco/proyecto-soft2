import { DAO, ICreatable } from "./interfaces/GenericInterfaces";
import { ProfesorReview, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { IFindProfesorReviews } from "./interfaces/ReviewInterfaces";

export class ProfesorReviewDAO
  implements ICreatable<ProfesorReview>, IFindProfesorReviews
{
  private prisma = new PrismaClient();

  async create(review: ProfesorReview) {
    const nuevoReview = await this.prisma.profesorReview.create({
      data: review,
    });
    return nuevoReview;
  }

  async findAll() {
    const reviews = await this.prisma.profesorReview.findMany();
    return reviews;
  }

  async findProfesorReviewsByAlumno(alumnoId: number) {
    const reviews = await this.prisma.profesorReview.findMany({
      where: {
        alumnoId,
      },
    });

    if (!reviews) throw boom.notFound();
    return reviews;
  }
  async findProfesorReviewsByProfesor(profesorId: number) {
    const reviews = await this.prisma.profesorReview.findMany({
      where: {
        profesorId,
      },
    });

    if (!reviews) throw boom.notFound();

    return reviews;
  }
}
