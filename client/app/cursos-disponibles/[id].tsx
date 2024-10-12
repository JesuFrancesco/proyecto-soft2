"use client";
import { useRouter } from "next/router";

const CursoDetalle = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detalles del Curso</h1>
      <p>ID del curso: {id}</p>
    </div>
  );
};

export default CursoDetalle;
