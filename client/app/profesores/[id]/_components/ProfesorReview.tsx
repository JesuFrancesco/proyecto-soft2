"use client";
import { IReview } from "@/interfaces/IReview";
import React from "react";
import HabilidadStarRating from "./ui/StarRating";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info } from "lucide-react";

const ProfesorReview = ({ resena }: { resena: IReview }) => {
  return (
    <div className="flex flex-row gap-3">
      <Popover>
        <PopoverTrigger>
          <Info />
        </PopoverTrigger>
        <PopoverContent className="relative w-fit">
          <HabilidadStarRating resena={resena} />
        </PopoverContent>
      </Popover>
      <div>
        <p key={resena.id}>“{resena.descripcion}”</p>
        <p className="font-semibold">
          - {resena.alumno?.nombre ?? "Alumno Anónimo"}
        </p>
      </div>
    </div>
  );
};

export default ProfesorReview;
