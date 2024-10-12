import {
  Account,
  Alumno,
  Clase,
  Departamento,
  Distrito,
  Especialidad,
  MaterialClase,
  MaterialEducativo,
  Pais,
  Prisma,
  PrismaClient,
  Profesor,
  ProfesorEspecialidad,
  ProfesorSubEspecialidad,
  Provincia,
  Sector,
  SubEspecialidad,
  Suscripcion,
} from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

const loadJSON = (pathToJSON: string) => {
  const jsonFilePath = path.join(__dirname, pathToJSON);
  const rawContent = fs.readFileSync(jsonFilePath, "utf8");
  return JSON.parse(rawContent);
};

async function main() {
  // ubigeos
  await loadPaises();
  await loadPeruUbigeos();

  // static
  await loadSuscripciones();
  await loadSectores();

  // mock
  await loadMockData();
}

async function loadPaises() {
  const data = loadJSON("seeders/paises.json");
  try {
    await prisma.pais.createMany({
      data: data as Pais[],
      skipDuplicates: true,
    });
  } catch (error) {
    console.error("Error executing SQL:", error);
  }
}
async function loadPeruUbigeos() {
  const dataDepa = loadJSON("seeders/departamentos.json") as Departamento[];
  const dataProv = loadJSON("seeders/provincias.json") as Provincia[];
  const dataDist = loadJSON("seeders/distritos.json") as Distrito[];
  try {
    await prisma.departamento.createMany({
      data: dataDepa,
      skipDuplicates: true,
    });
    await prisma.provincia.createMany({
      data: dataProv,
      skipDuplicates: true,
    });
    await prisma.distrito.createMany({
      data: dataDist,
      skipDuplicates: true,
    });
  } catch (error) {
    console.log("#################");
    console.error("loadPeruUbigeos | ALGO SALIO MAL:", error);
    console.log("#################");
  }
}

async function loadSuscripciones() {
  const data = loadJSON("seeders/suscripciones.json") as Suscripcion[];
  try {
    await prisma.suscripcion.createMany({
      data: data,
      skipDuplicates: true,
    });
  } catch (error) {
    console.error("loadSuscripciones | Error executing SQL:", error);
  }
}
async function loadSectores() {
  const data = loadJSON("seeders/sectores.json") as Sector[];
  try {
    await prisma.sector.createMany({
      data: data,
      skipDuplicates: true,
    });
  } catch (error) {
    console.error("loadSectores | Error executing SQL:", error);
  }
}

async function loadMockData() {
  const dataCuentas = loadJSON("seeders/accounts.json") as Account[];
  const dataAlumnos = loadJSON("seeders/alumnos.json") as Alumno[];
  const dataProfesores = loadJSON("seeders/profesores.json") as Profesor[];
  const dataEspecialidades = loadJSON(
    "seeders/especialidades.json"
  ) as Especialidad[];
  const dataSubEspecialidades = loadJSON(
    "seeders/subespecialidades.json"
  ) as SubEspecialidad[];

  const dataProfesorEspecialidad = loadJSON(
    "seeders/profesor_especialidad.json"
  ) as ProfesorEspecialidad[];
  const dataProfesorSubEspecialidades = loadJSON(
    "seeders/profesor_subespecialidad.json"
  ) as ProfesorSubEspecialidad[];
  try {
    await prisma.account.createMany({
      data: dataCuentas,
      skipDuplicates: true,
    });
    await prisma.alumno.createMany({
      data: dataAlumnos,
      skipDuplicates: true,
    });
    await prisma.profesor.createMany({
      data: dataProfesores,
      skipDuplicates: true,
    });
    await prisma.especialidad.createMany({
      data: dataEspecialidades,
      skipDuplicates: true,
    });
    await prisma.subEspecialidad.createMany({
      data: dataSubEspecialidades,
      skipDuplicates: true,
    });
    await prisma.profesorEspecialidad.createMany({
      data: dataProfesorEspecialidad,
      skipDuplicates: true,
    });
    await prisma.profesorSubEspecialidad.createMany({
      data: dataProfesorSubEspecialidades,
      skipDuplicates: true,
    });
  } catch (error) {
    console.error("loadMockData 1 | Error executing SQL:", error);
  }

  const dataClases = loadJSON("seeders/clases.json");
  const dataMaterialesEdu = loadJSON("seeders/materiales.json");
  const dataMaterialesClase = loadJSON("seeders/materiales_clase.json");

  try {
    await prisma.clase.createMany({
      data: dataClases as Clase[],
      skipDuplicates: true,
    });
    await prisma.materialEducativo.createMany({
      data: dataMaterialesEdu as MaterialEducativo[],
      skipDuplicates: true,
    });
    await prisma.materialClase.createMany({
      data: dataMaterialesClase as MaterialClase[],
      skipDuplicates: true,
    });
  } catch (error) {
    console.error("loadMockData 2 | Error executing SQL:", error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
