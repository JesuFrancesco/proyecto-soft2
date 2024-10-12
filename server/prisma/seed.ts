import {
  Account,
  Alumno,
  Departamento,
  Distrito,
  Pais,
  PrismaClient,
  Profesor,
  Provincia,
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
  await loadPaises();
  await loadDepartamentos();
  await loadProvincias();
  await loadDistritos();

  await loadSuscripciones();
  await loadAccounts();
}

async function loadPaises() {
  const data = loadJSON("seeders/paises.json");
  try {
    await prisma.pais.createMany({
      data: data as Pais[],
    });
  } catch (error) {
    console.error("Error executing SQL:", error);
  }
}
async function loadDepartamentos() {
  const data = loadJSON("seeders/departamentos.json");
  try {
    await prisma.departamento.createMany({
      data: data as Departamento[],
    });
  } catch (error) {
    console.error("Error executing SQL:", error);
  }
}
async function loadProvincias() {
  const data = loadJSON("seeders/provincias.json");
  try {
    await prisma.provincia.createMany({
      data: data as Provincia[],
    });
  } catch (error) {
    console.error("Error executing SQL:", error);
  }
}
async function loadDistritos() {
  const data: any[] = loadJSON("seeders/distritos.json");
  try {
    const uniqueItems = data.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );
    await prisma.distrito.createMany({
      data: uniqueItems as Distrito[],
    });
  } catch (error) {
    console.error("Error executing SQL:", error);
  }
}
async function loadSuscripciones() {
  const data: any[] = loadJSON("seeders/suscripciones.json");
  try {
    const uniqueItems = data.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );
    await prisma.suscripcion.createMany({
      data: uniqueItems as Suscripcion[],
    });
  } catch (error) {
    console.error("Error executing SQL:", error);
  }
}
async function loadAccounts() {
  const dataCuentas: any[] = loadJSON("seeders/accounts.json");
  const dataAlumnos: any[] = loadJSON("seeders/alumnos.json");
  const dataProfesores: any[] = loadJSON("seeders/profesores.json");
  try {
    await prisma.account.createMany({
      data: dataCuentas as Account[],
    });
    await prisma.alumno.createMany({
      data: dataAlumnos as Alumno[],
    });
    await prisma.profesor.createMany({
      data: dataProfesores as Profesor[],
    });
  } catch (error) {
    console.error("Error executing SQL:", error);
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
