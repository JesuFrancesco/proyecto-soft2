"use server";
import Image from "next/image";
import axios from "axios";
import { Config } from "@/config/credentials";
import { IProfesor } from "@/interfaces/IProfesor";
import Link from "next/link";
import { ProfesorRadarScore } from "./_components/ProfesorRadarChart";
import ProfesorReview from "./_components/ProfesorReview";
import { IProfesorReview } from "@/interfaces/IReview";
import { Badge } from "@/components/ui/badge";

interface ProfesorDetalleProps {
  params: {
    id: string;
  };
}
const getProfesorAverageScores = (data: IProfesorReview[]) => {
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

export default async function ProfesoresPage({ params }: ProfesorDetalleProps) {
  const { id } = params;

  const { data: profesor } = await axios.get<IProfesor>(
    `${Config.EXPRESS_API_URL}/profesores/${id}`
  );

  return (
    <div className="flex flex-col items-center justify-center p-1 md:p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full md:w-3/4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Información del Profesor</h1>
          <h2 className="text-2xl font-semibold self-center mb-2">
            Profesor: {profesor.nombre}
          </h2>
          <div className="my-4 self-center">
            <Image
              src={
                profesor.imageUrl
                  ? profesor.imageUrl
                  : "https://dina.concytec.gob.pe/appDirectorioCTI/UploadFotoPath.do?tipo=visualizar_archivo&id_investigador=29178&ruta=/documents/docInvestigadores/29178/imagenes/Carlos.jpg&content_type=image/jpeg"
              }
              width={512}
              height={512}
              alt="Profesor Felix"
              className="w-64 h-64 rounded-full shadow-lg"
            />
          </div>

          {/* Habilidades */}
          <div className="mt-4 border-t relative self-center w-full md:w-3/4 border-gray-300 dark:border-gray-600 pt-4">
            <ProfesorRadarScore
              data={getProfesorAverageScores(profesor.resenasAsociadas)}
            />
          </div>
        </div>

        {/* Sección de biografía */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4">
          <h3 className="text-lg font-semibold mb-2">Biografía</h3>
          <p className="text-justify">
            {profesor.biografia ?? (
              <i>El profesor no ha adjuntado biografía...</i>
            )}
          </p>
        </div>

        {/* Sección de clases */}
        <div className="mt-4 border-t border-gray-300 dark:border-gray-600 pt-4">
          <h3 className="text-lg font-semibold   mb-2">Clases</h3>
          {profesor.clases && profesor.clases.length > 0 ? (
            <ul className="list-disc pl-5  ">
              {profesor.clases.map((clase) => (
                <li key={clase.id} className="mb-2">
                  <span className="font-semibold">
                    <Link href={`/cursos/${clase.id}`}>
                      {clase.tema.subespecialidad}
                    </Link>
                  </span>{" "}
                  -{" "}
                  <span className="italic">
                    {new Date(clase.fechaClase).toLocaleString("es-PE", {
                      weekday: "long",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </span>{" "}
                  {clase.esVirtual && (
                    <Badge className="font-bold">Virtual</Badge>
                  )}{" "}
                  {clase.esGrupal && (
                    <Badge className="font-bold">Grupal</Badge>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className=" ">No hay clases programadas actualmente.</p>
          )}
        </div>

        {/* Sección de comentarios de estudiantes */}
        <div className="mt-4 border-t border-gray-300 dark:border-gray-600 pt-4">
          <h3 className="text-lg font-semibold   mb-2">
            Comentarios de Estudiantes
          </h3>
          {profesor.resenasAsociadas && profesor.resenasAsociadas.length > 0 ? (
            <div className="space-y-6">
              {profesor.resenasAsociadas.length ? (
                profesor.resenasAsociadas.map((resena, i) => (
                  <ProfesorReview key={i} resena={resena} />
                ))
              ) : (
                <p className="italic">
                  Este profesor no tiene reseñas asociadas
                </p>
              )}
            </div>
          ) : (
            <p className=" ">No hay comentarios de estudiantes disponibles.</p>
          )}
        </div>

        {/* Información de contacto */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4">
          <h3 className="text-lg font-semibold   mb-2">Contacto</h3>
          <p className=" ">
            ✉️ Email:{" "}
            <Link
              href={profesor.account.email ?? "felix@ejemplo.com"}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {profesor.account.email ?? "felix@ejemplo.com"}
            </Link>
          </p>
          <p className=" ">
            📞 Teléfono: {profesor.account.phone ?? "+51 999 999 999"}
          </p>
        </div>
      </div>
    </div>
  );
}
