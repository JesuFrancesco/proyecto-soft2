"use client";
import { useParams } from "next/navigation";

const CursoDetalle = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalles del Curso</h1>
      <p>ID del curso: {id}</p>
    </div>
  );
};

export default CursoDetalle;
