import { ICrud } from "./interfaces/ICrud";
import { Review, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { IFindReviews } from "./interfaces/IReviewFindable";

export class ReviewDAO implements ICrud<Review>, IFindReviews {
  private prisma = new PrismaClient();

  async create(review: Review) {
    const nuevoReview = await this.prisma.review.create({
      data: review,
    });
    return nuevoReview;
  }

  async findAll() {
    const reviews = await this.prisma.review.findMany();
    return reviews;
  }

  async findByPk(id: number | string) {
    const review = await this.prisma.review.findUnique({
      where: {
        id: id as number,
      },
    });

    if (!review) {
      throw boom.notFound();
    }

    return review;
  }

  async findReviewsByAlumno(alumnoId: number) {
    const reviews = await this.prisma.review.findMany({
      where: {
        alumnoId,
      },
    });

    if (!reviews) throw boom.notFound();
    return reviews;
  }
  async findReviewsByProfesor(profesorId: number) {
    const reviews = await this.prisma.review.findMany({
      where: {
        profesorId,
      },
    });

    if (!reviews) throw boom.notFound();

    return reviews;
  }

  async update(id: number, cambios: Partial<Review>) {
    const reviewCambiado = await this.prisma.review.update({
      where: {
        id,
      },
      data: cambios,
    });

    return reviewCambiado;
  }

  async deleteByPk(id: number) {
    const reviewEliminado = await this.prisma.review.delete({
      where: {
        id,
      },
    });
    return reviewEliminado;
  }
}
