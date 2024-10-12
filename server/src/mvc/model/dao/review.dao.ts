import { IEduyachaDAO } from "./interfaces/IEduyachaDAO";
import { Review, PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";

export class ReviewDAO implements IEduyachaDAO<Review> {
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

  async findByPk(id: number) {
    const review = await this.prisma.review.findUnique({
      where: {
        id,
      },
    });

    if (!review) {
      throw boom.notFound();
    }

    return review;
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
