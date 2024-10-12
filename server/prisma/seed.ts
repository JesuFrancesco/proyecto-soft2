import {
  Departamento,
  Distrito,
  Pais,
  PrismaClient,
  Provincia,
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

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
