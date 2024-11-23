import React from "react";
import { IProfesorReview } from "@/interfaces/IReview";
import { Star } from "lucide-react";

const StarRating = ({ title, puntaje }: { title: string; puntaje: number }) => {
  return (
    <div className="flex flex-row gap-1">
      {title}{" "}
      {Array.from({ length: puntaje! }, (_, i) => (
        <span key={i}>
          <Star className="text-transparent fill-yellow-300" />
        </span>
      ))}
    </div>
  );
};

const HabilidadStarRating = ({ resena }: { resena: IProfesorReview }) => {
  const {
    comunicacion,
    disponibilidad,
    ensenanza,
    evaluacion,
    empatia,
    puntualidad,
  } = resena;

  const habilidades = {
    Comunicación: comunicacion,
    Disponibilidad: disponibilidad,
    Enseñanza: ensenanza,
    Evaluación: evaluacion,
    Empatía: empatia,
    Puntualidad: puntualidad,
  };
  return Object.entries(habilidades).map(([key, value], i) => (
    <StarRating key={i} title={key} puntaje={value as number} />
  ));
};

export default HabilidadStarRating;
