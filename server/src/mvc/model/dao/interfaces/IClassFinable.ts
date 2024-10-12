import { Clase } from "@prisma/client";

interface IFindClasesByAlumno {
  findClasesByAlumno: (alumnoId: number) => Promise<Clase[]>;
}

interface IFindClasesByProfesor {
  findClasesByProfesor: (profesorId: number) => Promise<Clase[]>;
}
export interface IFindClases
  extends IFindClasesByAlumno,
    IFindClasesByProfesor {}
