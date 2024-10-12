"use client";
import { useParams } from "next/navigation";

const MisCursoDetallePage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Detalles de Mi Curso</h1>
      <p>ID del curso: {id}</p>
    </div>
  );
};

export default MisCursoDetallePage;
