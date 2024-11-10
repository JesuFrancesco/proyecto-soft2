"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { IClase } from "@/interfaces/IClase";
import {
  fetchClases,
  fetchClasesByEspecialidad,
} from "@/service/clase.service";
import { Loader2 } from "lucide-react";
import { CheckboxCursosFilter } from "./CheckboxFilters";
import {
  CursoFilterSchema,
  CursoFilterSchemaType,
  CursoQuerySchema,
  CursoQuerySchemaType,
} from "@/schema/CursoFilterSchema";
import { TextInputCursosFilter } from "./InputFilter";

const WidgetCursos = () => {
  const checkboxForm = useForm<CursoFilterSchemaType>({
    resolver: zodResolver(CursoFilterSchema),
    defaultValues: {
      items: [],
    },
  });

  const inputForm = useForm<CursoQuerySchemaType>({
    resolver: zodResolver(CursoQuerySchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(data: CursoFilterSchemaType) {
    await refetch();
  }

  const {
    data: clases,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<IClase[]>({
    queryKey: ["clases"],
    queryFn:
      checkboxForm.getValues().items.length === 0
        ? () => fetchClases()
        : () => fetchClasesByEspecialidad(checkboxForm.getValues()),
    enabled: true,
    retry: true,
  });

  if (isLoading) return <Loader2 className="animate-spin" />;

  return (
    <div>
      <div className="flex justify-center items-center p-3">
        {isFetching && <Loader2 className="text-yellow-300 animate-spin" />}
      </div>
      <div className="flex justify-between items-start p-3">
        <CheckboxCursosFilter form={checkboxForm} onSubmit={onSubmit} />
        <TextInputCursosFilter form={inputForm} />
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clases &&
          clases.map((course) => (
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
                  <Button className="text-white py-2 px-4 rounded-md transition-colors duration-200">
                    Ver detalles
                  </Button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WidgetCursos;
