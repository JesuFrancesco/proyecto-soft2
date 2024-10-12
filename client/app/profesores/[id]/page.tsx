"use client";
import { useParams } from "next/navigation";
import React from "react";

const ProfesoresPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Información del Profesor
          </h1>
          <img
            src="https://dina.concytec.gob.pe/appDirectorioCTI/UploadFotoPath.do?tipo=visualizar_archivo&id_investigador=29178&ruta=/documents/docInvestigadores/29178/imagenes/Carlos.jpg&content_type=image/jpeg" // Reemplaza esto con la ruta a la imagen del profesor
            alt="Profesor Felix"
            className="w-32 h-32 rounded-full shadow-lg mb-4"
          />
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Profesor: Felix
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Curso: Cálculo III
          </p>

          {/* Sección de habilidades */}

          <img
            src="https://i0.wp.com/granpausa.com/wp-content/uploads/2015/02/completo-e1424557455185.jpg?fit=1000%2C1000&ssl=1" // Reemplaza esto con la ruta a la imagen del profesor
          />

          {/* Sección de biografía */}
          <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Biografía
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Felix es un apasionado profesor de matemáticas con más de 10 años
              de experiencia en la enseñanza. Su enfoque pedagógico se centra en
              hacer que los conceptos complejos sean accesibles y comprensibles
              para todos los estudiantes. Ha participado en diversas
              conferencias y talleres sobre enseñanza de matemáticas y está
              comprometido con el desarrollo académico de sus alumnos.
            </p>
          </div>

          {/* Sección de horarios de clase */}
          <div className="mt-4 border-t border-gray-300 dark:border-gray-600 pt-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Horarios de Clase
            </h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Lunes: 10:00 AM - 12:00 PM</li>
              <li>Miércoles: 10:00 AM - 12:00 PM</li>
              <li>Viernes: 2:00 PM - 4:00 PM</li>
            </ul>
          </div>

          {/* Sección de comentarios de estudiantes */}
          <div className="mt-4 border-t border-gray-300 dark:border-gray-600 pt-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Comentarios de Estudiantes
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-2">
              <p>
                “Felix hace que Cálculo III sea mucho más fácil de entender. Su
                paciencia y dedicación son admirables.” - Ana M.
              </p>
              <p>
                “Las clases son interactivas y divertidas. Aprendí mucho más de
                lo que esperaba.” - Luis P.
              </p>
              <p>
                “Un excelente profesor que siempre está dispuesto a ayudar.” -
                Sofia R.
              </p>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Contacto
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ✉️ Email:{" "}
              <a
                href="mailto:felix@ejemplo.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                felix@ejemplo.com
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              📞 Teléfono: +51 999 999 999
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesoresPage;
