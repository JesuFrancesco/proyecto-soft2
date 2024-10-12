"use server";

import { EXPRESS_API_URL } from "@/app/config/apiUrls";
import { IClase } from "@/interfaces/IClase";
import axios from "axios";

interface CursoDetalleProps {
  params: {
    id: string;
  };
}

export default async function CursoDetalle({ params }: CursoDetalleProps) {
  const { id } = params;

  const curso = (await axios.get(EXPRESS_API_URL + `/clases/${id}`)) as IClase;
  console.log(curso);

  return (
    <div>
      <h1>Detalles del Curso</h1>
      <p>ID del curso: {id}</p>
    </div>
  );
}
