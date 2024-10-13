import { IClase } from "./IClase";

export interface IAlumnoClase {
  nota: number;
  alumnoId: number;
  claseId: number;
  createdAt: Date;
  updatedAt: Date;
  clase: IClase;
}
