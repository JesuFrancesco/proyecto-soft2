import { IProfesor } from "./IProfesor";

export interface IEspecialidad {
  id: number;
  especialidad: string;
  createdAt: string;
  updatedAt: string;
  profesorEspecialidades: IProfesorEspecialidad[];
  subEspecialidades: ISubEspecialidad[];
}

export interface IProfesorEspecialidad {
  profesorId: number;
  especialidadId: number;
  subEspecialidadId?: number;
  createdAt: string;
  updatedAt: string;
  profesor?: IProfesor;
  especialidad?: IEspecialidad;
}

export interface IProfesorSubEspecialidad {
  subEspecialidadId: number;
  profesorId: number;
  createdAt: string;
  updatedAt: string;
  subEspecialidad?: ISubEspecialidad;
}

export interface ISubEspecialidad {
  id: number;
  subespecialidad: string;
  especialidadId: number;
  createdAt: string;
  updatedAt: string;
}
