import { IAccount } from "./IAccount";
// import { IAlumnoClase } from "./IAlumnoClase";

export interface IAlumno {
  id: number;
  nombre: string;
  edad: number;
  imageUrl: string;
  account: IAccount;
  // clases: IAlumnoClase[];
  // preferencias: alumnopreferencia
  // chats:        chat
  // reviews:      review
  accountId: string;
  createdAt: Date;
  updatedAt: Date;
}
