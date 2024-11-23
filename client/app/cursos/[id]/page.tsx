"use server";

import { Config } from "@/config/credentials";
import { IClase } from "@/interfaces/IClase";
import axios from "axios";
import Image from "next/image";
import AlumnoCTA from "./_components/AlumnoCTA";
import CursosGrid from "@/components/common/CursosGrid";
import SimilarCursos from "./_components/SimilarCursos";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import MaterialCursoWidget from "./_components/MaterialCursoWidget";

interface CursoDetalleProps {
  params: {
    id: string;
  };
}

export default async function CursoDetalle({ params }: CursoDetalleProps) {
  const { id } = params;

  const { data: curso } = await axios.get<IClase>(
    `${Config.EXPRESS_API_URL}/clases/${id}`
  );

  const hayVacantes = curso.vacantesMax - curso.alumnos.length >= 0;

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center mb-4 text-primary-800 dark:text-primary-400">
        Detalles del curso: {curso.tema.subespecialidad}
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

        {/* Informacion general */}
        <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
            Información General
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p>
              <strong>Número de vacantes:</strong> {curso.vacantesMax}
            </p>
            <p>
              <strong>Vacantes disponibles:</strong>{" "}
              {curso.vacantesMax - curso.alumnos.length}
            </p>
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

      {/* Resumen de profesor */}
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

      {/* Material de clase */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
          Material de Clase
        </h2>
        {curso.materialClase && curso.materialClase.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curso.materialClase.map((item) => {
              //
              return <MaterialCursoWidget key={item.id} item={item} />;
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No hay materiales disponibles.
          </p>
        )}
      </div>

      {/* Boton de matricula */}
      <div className="flex justify-center items-center my-4 self-center">
        {hayVacantes ? (
          <AlumnoCTA id={parseInt(id)} />
        ) : (
          <Button variant={"outline"} disabled={true}>
            Ya no hay vacantes disponibles
          </Button>
        )}
      </div>

      <div>
        <div className="text-2xl my-2">Tambien te puede interesar...</div>
        <SimilarCursos especialidades={[curso.tema.especialidadId]} />
      </div>
    </div>
  );
}
