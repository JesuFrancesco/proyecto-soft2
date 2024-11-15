import { IAccount } from "./IAccount";
import { IClase } from "./IClase";

export interface IAlumno {
  id: number;
  nombre: string;
  edad: number;
  imageUrl: string;
  account: IAccount;
  clases: IClase[];
  // preferencias: alumnopreferencia
  // chats:        chat
  // reviews:      review
  accountId: string;
  createdAt: Date;
  updatedAt: Date;
}
