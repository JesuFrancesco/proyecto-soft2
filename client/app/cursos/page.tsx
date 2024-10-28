"use server";
import Image from "next/image";
import axios from "axios";
import WidgetWrapper from "@/components/common/WidgetWrapper";
import Link from "next/link";
import { Config } from "../../config/credentials";
import { IClase } from "@/interfaces/IClase";
import { Button } from "@/components/ui/button";

const fetchDataFromAPI = async () => {
  const res = await axios.get(`${Config.EXPRESS_API_URL}/clases`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.data) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
};

export default async function CursosDisponiblesPage() {
  const clases = (await fetchDataFromAPI()) as IClase[];
  // console.log(clases);

  return (
    <WidgetWrapper
      id="my-courses"
      hasBackground={true}
      containerClass="pb-12 md:pb-16 lg:pb-20"
    >
      <div id="general-courses" className="pb-12 md:pb-16 lg:pb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Cursos Disponibles</h2>
          <h1 className="text-4xl sm:text-6xl font-bold">
            Explora Nuestros Cursos
          </h1>
        </div>
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clases.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md transition-colors duration-200"
            >
              <Image
                src={course.materialClase[0].material.assetUrl}
                alt={`Imagen de ${course.tema.subEspecialidad}`}
                width={500}
                height={120}
                className="rounded-md mb-4 object-cover h-32"
              />
              <h3 className="text-lg font-medium">
                {course.tema.subEspecialidad}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {course.sector.name}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Profesor:{" "}
                <Link href={`/profesores/${course.idProfesor}`}>
                  <span className="hover:font-bold">
                    {course.profesor.nombre}
                  </span>
                </Link>
              </p>
              <div className="mt-4 flex justify-between items-center">
                <Link href={`/cursos/${course.id}`}>
                  <Button className="bg-primary-600 hover:bg-primary-500 text-white py-2 px-4 rounded-md transition-colors duration-200">
                    Ver detalles
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WidgetWrapper>
  );
}
