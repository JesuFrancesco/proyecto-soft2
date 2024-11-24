
import React from "react";
import { IClaseReview } from "@/interfaces/IReview";
import { RadarScoreChart } from "./resenias/RadarScoreChart";
import ClaseReview from "./resenias/ClaseReview";
import FormularioResena from "./resenias/FormularioResenias";
import { postReseniaDeClase } from "@/service/review.service";
import { IClase } from "@/interfaces/IClase";

const getClaseAverageScores = (data: IClaseReview[]) => {
  const skillScores = {
    Enseñanza: 0,
    Puntualidad: 0,
    Disponibilidad: 0,
    Comunicación: 0,
    Evaluación: 0,
    Empatía: 0,
  };

  data.forEach((review) => {
    skillScores.Enseñanza += review.ensenanza ?? 0;
    skillScores.Puntualidad += review.puntualidad ?? 0;
    skillScores.Disponibilidad += review.disponibilidad ?? 0;
    skillScores.Comunicación += review.comunicacion ?? 0;
    skillScores.Evaluación += review.evaluacion ?? 0;
    skillScores.Empatía += review.empatia ?? 0;
  });

  const numReviews = data.length || 1;
  return Object.entries(skillScores).map(([habilidad, total]) => ({
    habilidad,
    puntaje: total / numReviews,
  }));
};


const TabResenias = ({ reseñas, clase }: { reseñas: IClaseReview[], clase: IClase }) => {
  const averageScores = getClaseAverageScores(reseñas);
  const handleSubmit = async (data: any) => {
    try {
      const response = await postReseniaDeClase({
        ...data,
        claseId: clase.id,
      });
      console.log("Reseña enviada con éxito:", response);
    } catch (error) {
      console.error("Error al enviar la reseña:", error);
    }
  };
  
  return (
    <div className="space-y-6 overflow-y-auto h-[34rem]">

      {reseñas.length > 0 && (
        <div className="mt-4 border-t relative self-center w-full md:w-3/4 border-gray-300 dark:border-gray-600 pt-4">
          <h3 className="text-lg font-semibold mb-4">Promedio de habilidades</h3>
          <RadarScoreChart data={averageScores} />
        </div>
      )}

      {reseñas.length > 0 ? (
        reseñas.map((resena, index) => <ClaseReview key={index} resena={resena} />)
      ) : (
        <p>No hay reseñas disponibles.</p>
      )}
      <FormularioResena onSubmit={handleSubmit} claseId={clase.id} />

    </div>
  );
};

export default TabResenias;
