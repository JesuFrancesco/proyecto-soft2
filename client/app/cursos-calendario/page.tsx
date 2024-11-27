"use client";
import { IClase } from "@/interfaces/IClase";
import { fetchAllClases } from "@/service/clase.service";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React from "react";
import Calendar from "./_components/calendar";

const CursosPorCalendarioPage = () => {
  const {
    data: clases,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<IClase[]>({
    queryKey: ["clases"],
    queryFn: () => fetchAllClases(),
    enabled: true,
    retry: true,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl my-2">Calendario de cursos</h1>
      <h2 className="text-xl my-3">📅</h2>
      {isLoading ? (
        <Loader2 className="animate-spin mx-auto" />
      ) : isFetching ? (
        <Loader2 className="text-yellow-500 animate-spin mx-auto" />
      ) : (
        <Calendar clases={clases!} />
      )}
    </div>
  );
};

export default CursosPorCalendarioPage;
