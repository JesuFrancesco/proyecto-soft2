"use client";
import { useRouter } from "next/router";

const ProfesorDetallePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detalles del Profesor</h1>
      <p>ID del profesor: {id}</p>
    </div>
  );
};

export default ProfesorDetallePage;
