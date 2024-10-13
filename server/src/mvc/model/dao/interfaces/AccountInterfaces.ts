import { Account } from "@prisma/client";
import { IFindByEmail } from "./GenericInterfaces";

export interface IAccountCreatable {
  createAlumnoAccount: (account: Account) => Promise<Account>;
  createProfesorAccount: (account: Account) => Promise<Account>;
}

export interface IFindAccountByEmail extends IFindByEmail<Account> {}
