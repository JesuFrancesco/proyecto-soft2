"use client";
import React from "react";
import { IClaseReview } from "@/interfaces/IReview";
import HabilidadStarRating from "@/app/profesores/[id]/_components/ui/StarRating";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info } from "lucide-react";

const ClaseReview = ({ resena }: { resena: IClaseReview }) => {
  return (
    <div className="flex flex-row gap-3 border p-4 rounded-md shadow-md">
      <Popover>
        <PopoverTrigger>
          <Info className="cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent className="relative w-fit">
          <HabilidadStarRating resena={resena} />
        </PopoverContent>
      </Popover>
      <div>
        <p className="italic">“{resena.descripcion}”</p>
        <p className="font-semibold mt-2">- {resena.alumno?.nombre ?? "Alumno Anónimo"}</p>
        <p className="text-xs text-gray-500 mt-2">
          Fecha: {new Date(resena.createdAt).toLocaleDateString("es-ES")}
        </p>
      </div>
    </div>
  );
};

export default ClaseReview;
