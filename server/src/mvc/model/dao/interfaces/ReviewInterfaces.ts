import { Review } from "@prisma/client";

// alumno
interface IFindReviewsByAlumno {
  findReviewsByAlumno: (alumnoId: number) => Promise<Review[]>;
}

// profesor
interface IFindReviewsByProfesor {
  findReviewsByProfesor: (profesorId: number) => Promise<Review[]>;
}

export interface IFindReviews
  extends IFindReviewsByAlumno,
    IFindReviewsByProfesor {}
