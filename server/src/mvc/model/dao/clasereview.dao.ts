import { DAO, ICreatable } from "./interfaces/GenericInterfaces";
import { ClaseReview, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { IFindClaseReviews } from "./interfaces/ReviewInterfaces";

export class ClaseReviewDAO
  implements ICreatable<ClaseReview>, IFindClaseReviews
{
  private prisma = new PrismaClient();

  async create(review: ClaseReview) {
    const nuevoReview = await this.prisma.claseReview.create({
      data: review,
    });
    return nuevoReview;
  }

  async findAll() {
    const reviews = await this.prisma.claseReview.findMany();
    return reviews;
  }

  async findClaseReviewsByAlumno(alumnoId: number) {
    const reviews = await this.prisma.claseReview.findMany({
      where: {
        alumnoId,
      },
    });

    if (!reviews) throw boom.notFound();
    return reviews;
  }
  async findClaseReviewsByProfesor(claseId: number) {
    const reviews = await this.prisma.claseReview.findMany({
      where: {
        claseId,
      },
    });

    if (!reviews) throw boom.notFound();

    return reviews;
  }
}
