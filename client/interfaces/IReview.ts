import { IAlumno } from "./IAlumno";
import { IProfesor } from "./IProfesor";

export interface IReview {
  id: number;
  descripcion: string;
  ensenanza?: number;
  puntualidad?: number;
  disponibilidad?: number;
  comunicacion?: number;
  evaluacion?: number;
  empatia?: number;
  profesorId?: number;
  alumnoId?: number;
  createdAt: string;
  updatedAt: string;
  profesor?: IProfesor;
  alumno?: IAlumno;
}
