"use client";
import { useParams } from "next/navigation";

const ProfesorDetallePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalles del Profesor</h1>
      <p>ID del profesor: {id}</p>
    </div>
  );
};

export default ProfesorDetallePage;
