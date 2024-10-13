import { Profesor } from "@prisma/client";
import { IFindByEmail } from "./GenericInterfaces";

export interface IFindProfesorByEmail extends IFindByEmail<Profesor> {}
