import { IAccount } from "./IAccount";
import { IClase } from "./IClase";
import {
  IProfesorEspecialidad,
  IProfesorSubEspecialidad,
} from "./IEspecialidad";
import { IProfesorReview } from "./IReview";

export interface IProfesor {
  id: number;
  nombre: string;
  edad: number;
  biografia: string;
  imageUrl: string;
  account: IAccount;

  resenasAsociadas: IProfesorReview[];
  clases: IClase[];
  especialidades: IProfesorEspecialidad[];
  profesorSubEspecialidades: IProfesorSubEspecialidad[];

  paisId: string;
  accountId: number;
  createdAt: string;
  updatedAt: string;
}
