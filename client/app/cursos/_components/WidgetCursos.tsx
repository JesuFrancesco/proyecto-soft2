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
import { CheckboxCursosFilter } from "./ui/CheckboxFilters";
import {
  CursoFilterSchema,
  CursoFilterSchemaType,
  CursoQuerySchema,
  CursoQuerySchemaType,
} from "@/schema/CursoFilterSchema";
import { TextInputCursosFilter } from "./ui/InputFilter";

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

  if (isLoading) return <Loader2 className="animate-spin mx-auto" />;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center p-3">
        {isFetching && <Loader2 className="text-yellow-300 animate-spin" />}
      </div>

      {/* Main content layout */}
      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Filters sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-4">
            <TextInputCursosFilter form={inputForm} />
            <hr className="bg-primary py-0.5 my-8 rounded-md" />
            <CheckboxCursosFilter form={checkboxForm} onSubmit={onSubmit} />
          </div>
        </div>

        {/* Course grid */}
        {clases?.length === 0 ? (
          <div className="flex justify-center items-center text-xl">
            <h1>No hay cursos disponibles...</h1>
          </div>
        ) : (
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {clases?.map((course) => (
                <div
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
                    {course.tema.subespecialidad}
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
                      <span className="hover:underline">
                        {course.profesor.nombre}
                      </span>
                    </Link>
                  </p>

                  <div className="mt-4">
                    <Link
                      href={`/cursos/${course.id}`}
                      className="w-full block"
                    >
                      <Button className="w-full">Ver detalles</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WidgetCursos;
