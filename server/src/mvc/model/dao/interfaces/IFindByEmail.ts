import { Account, Alumno, Profesor } from "@prisma/client";

interface IFindByEmail<T> {
  findByEmail: (email: string) => Promise<T>;
}

export interface IFindAccountByEmail extends IFindByEmail<Account> {}
export interface IFindAlumnoByEmail extends IFindByEmail<Alumno> {}
export interface IFindProfesorByEmail extends IFindByEmail<Profesor> {}
