import { ClaseReview, ProfesorReview } from "@prisma/client";

// == PROFESOR REVIEWS

// alumno
interface IFindProfesorReviewsByAlumno {
  findProfesorReviewsByAlumno: (alumnoId: number) => Promise<ProfesorReview[]>;
}

// profesor
interface IFindProfesorReviewsByProfesor {
  findProfesorReviewsByProfesor: (
    profesorId: number
  ) => Promise<ProfesorReview[]>;
}

export interface IFindProfesorReviews
  extends IFindProfesorReviewsByAlumno,
    IFindProfesorReviewsByProfesor {}

// alumno
interface IFindClaseReviewsByAlumno {
  findClaseReviewsByAlumno: (alumnoId: number) => Promise<ClaseReview[]>;
}

// profesor
interface IFindClaseReviewsByProfesor {
  findClaseReviewsByProfesor: (claseId: number) => Promise<ClaseReview[]>;
}

export interface IFindClaseReviews
  extends IFindClaseReviewsByAlumno,
    IFindClaseReviewsByProfesor {}
