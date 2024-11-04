import { IClase } from "./IClase";

export interface IMaterialEducativo {
  id: string;
  nombre: string;
  assetUrl: string;
  createdAt: Date;
  updatedAt: Date;
  materialClases: string;
}

export interface IMaterialClase {
  id: string;
  clase: IClase;
  material: IMaterialEducativo;
  materialId: number;
  claseId: number;
}
