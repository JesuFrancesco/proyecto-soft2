"use server";

import { EXPRESS_API_URL } from "@/app/config/credentials";
import { IClase } from "@/interfaces/IClase";
import axios from "axios";
import Image from "next/image";

interface CursoDetalleProps {
  params: {
    id: string;
  };
}

export default async function CursoDetalle({ params }: CursoDetalleProps) {
  const { id } = params;

  const { data: curso } = await axios.get<IClase>(
    `${EXPRESS_API_URL}/clases/${id}`
  );
  console.log(curso);

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center mb-4 text-blue-600">
        Detalles del curso: {curso.tema.subEspecialidad}
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-8">
        {curso.materialClase && curso.materialClase.length > 0 && (
          <div className="flex-1 mb-8 md:mb-0">
            <Image
              src={curso.materialClase[0].material.assetUrl}
              alt={curso.materialClase[0].material.nombre}
              width={400}
              height={300}
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        )}
        <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
            Información General
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p>
              <strong>Sector:</strong> {curso.sector.name}
            </p>
            <p>
              <strong>Tipo de clase:</strong>{" "}
              {curso.esVirtual ? "Virtual" : "Presencial"}
            </p>
            <p>
              <strong>Modalidad:</strong>{" "}
              {curso.esGrupal ? "Grupal" : "Individual"}
            </p>
            <p>
              <strong>Fecha de la clase:</strong>{" "}
              {new Date(curso.fechaClase).toLocaleDateString()}
            </p>
            <p>
              <strong>Hora de la clase:</strong>{" "}
              {new Date(curso.fechaClase).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
      <div className="my-8">
        <hr className="border-gray-300" />
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
          Información del Profesor
        </h2>
        <p>
          <strong>Nombre del profesor:</strong> {curso.profesor.nombre}
        </p>
        <p>
          <strong>Edad:</strong> {curso.profesor.edad} años
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
          Material de Clase
        </h2>
        {curso.materialClase && curso.materialClase.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curso.materialClase.map((item) => {
              console.log(item);
              return (
                <div
                  key={item.id}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105"
                >
                  <h3 className="font-semibold text-lg">
                    {item.material.nombre}
                  </h3>
                  <Image
                    src={item.material.assetUrl}
                    alt={item.material.nombre}
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover rounded-md mt-2"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No hay materiales disponibles.
          </p>
        )}
      </div>
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-200 shadow-lg"
          disabled
        >
          Matricularse en el Curso
        </button>
      </div>
    </div>
  );
}
