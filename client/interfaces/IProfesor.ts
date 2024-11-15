import { IAccount } from "./IAccount";
import { IClase } from "./IClase";
import {
  IProfesorEspecialidad,
  IProfesorSubEspecialidad,
} from "./IEspecialidad";
import { IReview } from "./IReview";

export interface IProfesor {
  id: number;
  nombre: string;
  edad: number;
  biografia: string;
  imageUrl: string;
  cuenta: IAccount;

  resenasAsociadas: IReview[];
  clases: IClase[];
  especialidades: IProfesorEspecialidad[];
  profesorSubEspecialidades: IProfesorSubEspecialidad[];

  paisId: string;
  accountId: number;
  createdAt: string;
  updatedAt: string;
}
