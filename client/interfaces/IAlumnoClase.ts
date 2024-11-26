import { IClase } from "./IClase";

export interface IAlumnoClase {
  alumnoId: number;
  claseId: number;
  nota: number;
  createdAt: Date;
  updatedAt: Date;
  clase: IClase;
}
