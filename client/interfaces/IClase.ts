import { IAlumno } from "./IAlumno";
import { IMaterialClase } from "./IMaterialEducativo";
import { IProfesor } from "./IProfesor";
import { ISector } from "./ISector";
import { ISubespecialidad } from "./ISubespecialidad";

export interface IAlumnoClase {
  alumno: IAlumno;
  clase: IClase;
  nota: number;
  createdAt: Date;
  updatedAt: Date;
  alumnoId: number;
  claseId: number;
}

export interface IClase {
  id: number;
  esVirtual: boolean;
  esGrupal: boolean;
  fechaClase: string;
  idProfesor: number;
  createdAt: string;
  updatedAt: string;
  subEspecialidadId: number;
  sectorId: number;
  tema: ISubespecialidad;
  profesor: IProfesor;
  sector: ISector;
  alumnos: IAlumno[];
  materialClase: IMaterialClase[];
}
