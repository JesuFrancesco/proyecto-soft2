"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useQuery } from "@tanstack/react-query";
import { IClase } from "@/interfaces/IClase";
import {
  fetchAllClases,
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
import CursosGrid from "@/components/common/CursosGrid";

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
        ? () => fetchAllClases()
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
            <CursosGrid clases={clases as IClase[]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WidgetCursos;
