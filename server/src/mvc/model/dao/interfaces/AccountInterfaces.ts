import { Account, Alumno, Profesor } from "@prisma/client";
import { IFindByEmail } from "./GenericInterfaces";

export interface IAccountCreatable {
  setupAlumnoAccount: (
    accountId: string,
    alumnoProps: Alumno
  ) => Promise<Account>;

  setupProfesorAccount: (
    accountId: string,
    profesorProps: Profesor
  ) => Promise<Account>;
}

export interface IFindByAccountId<T> {
  findByAccountId: (accountId: string) => Promise<T>;
}

export interface IFindAccountByEmail extends IFindByEmail<Account> {}
