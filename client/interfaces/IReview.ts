import { IAlumno } from "./IAlumno";
import { IClase } from "./IClase";
import { IProfesor } from "./IProfesor";

export interface IProfesorReview {
  profesor?: IProfesor;
  alumno?: IAlumno;
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
}
export interface IClaseReview {
  alumno?: IAlumno;
  clase?: IClase;

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
}
