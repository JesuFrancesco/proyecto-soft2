import React, { useState } from "react";
import InteractiveStarRating from "./InteractiveStarRating";
import { Button } from "@/components/ui/button";

const FormularioResena = ({
  onSubmit,
  claseId,
}: {
  onSubmit: (data: any) => void;
  claseId: number;
}) => {
  const [descripcion, setDescripcion] = useState("");
  const [ratings, setRatings] = useState({
    ensenanza: null,
    puntualidad: null,
    disponibilidad: null,
    comunicacion: null,
    evaluacion: null,
    empatia: null,
  });

  const handleRatingChange = (field: string, value: number) => {
    setRatings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nuevaResena = {
      descripcion,
      ...ratings,
      claseId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    onSubmit(nuevaResena);

    // Resetear el formulario
    setDescripcion("");
    setRatings({
      ensenanza: null,
      puntualidad: null,
      disponibilidad: null,
      comunicacion: null,
      evaluacion: null,
      empatia: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Escribe tu reseña aquí..."
        className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600"
        required
      />
      <div className="space-y-4">
        {Object.keys(ratings).map((field) => (
          <InteractiveStarRating
            key={field}
            title={field.charAt(0).toUpperCase() + field.slice(1)}
            value={ratings[field as keyof typeof ratings] ?? 0}
            onChange={(value) => handleRatingChange(field, value)}
          />
        ))}
      </div>
      <Button type="submit">Enviar Reseña</Button>
    </form>
  );
};

export default FormularioResena;
