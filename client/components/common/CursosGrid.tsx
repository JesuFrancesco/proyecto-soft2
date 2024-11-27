import React from "react";
import Image from "next/image";
import { IClase } from "@/interfaces/IClase";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const CursosGrid = ({ clases }: { clases: IClase[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {clases?.map((course) => (
        <Card
          key={course.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
        >
          <div className="relative aspect-video w-full mb-4">
            <Image
              src={course.materialClase[0].material.assetUrl}
              alt={`Imagen de ${course.tema.subespecialidad}`}
              fill
              className="rounded-md object-cover"
            />
          </div>

          <h3 className="text-lg font-semibold line-clamp-2">
            {course.id} - {course.tema.subespecialidad}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {course.sector.name}
          </p>

          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Profesor:{" "}
            <Link
              href={`/profesores/${course.profesorId}`}
              className="hover:text-primary transition-colors duration-200"
            >
              <span className="hover:underline">{course.profesor.nombre}</span>
            </Link>
          </p>

          <div className="mt-4">
            <Link href={`/cursos/${course.id}`} className="w-full block">
              <Button className="w-full">Ver detalles</Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CursosGrid;
