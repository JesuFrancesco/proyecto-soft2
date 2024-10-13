import { Alumno } from "@prisma/client";
import { IFindByEmail } from "./GenericInterfaces";

export interface IFindAlumnoByEmail extends IFindByEmail<Alumno> {}
