import { IProfesor } from "./IProfesor";
import { ISector } from "./ISector";
import { ISubespecialidad } from "./ISubespecialidad";

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
  curso: ISubespecialidad;
  profesor: IProfesor;
  sector: ISector;
  alumnos: any[];
  materialClase: any[];
}
