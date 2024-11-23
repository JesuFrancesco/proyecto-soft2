"use client";
import CursosGrid from "@/components/common/CursosGrid";
import { IClase } from "@/interfaces/IClase";
import { fetchClasesByEspecialidad } from "@/service/clase.service";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React from "react";

const SimilarCursosGrid = ({
  especialidades,
}: {
  especialidades: number[];
}) => {
  const { data: cursos, isLoading } = useQuery<IClase[]>({
    queryKey: ["cursos-similares"],
    enabled: true,
    retry: true,
    queryFn: () => fetchClasesByEspecialidad({ items: especialidades }),
  });

  if (isLoading) {
    return <Loader2 className="animate-spin" />;
  }

  return <CursosGrid clases={cursos as IClase[]}></CursosGrid>;
};

export default SimilarCursosGrid;
