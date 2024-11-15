"use client";
import { IProfesor } from "@/interfaces/IProfesor";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRouter } from "next-nprogress-bar";

const ProfesoresWidget = ({ profesores }: { profesores: IProfesor[] }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {profesores.map((profesor) => (
        <motion.div
          key={profesor.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="shadow-lg border border-gray-200 rounded-lg hover:shadow-xl">
            <CardHeader
              onClick={() => router.push(`/profesores/${profesor.id}`)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="rounded-full">
                <Image
                  src={profesor.imageUrl}
                  width={512}
                  height={512}
                  alt={profesor.nombre}
                  className="w-full h-32 rounded-full object-contain"
                />
              </div>
              <CardTitle className="text-xl font-semibold mt-2">
                {profesor.nombre}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Edad: {profesor.edad}</p>
              <div>
                <h4 className="font-medium">Especialidades:</h4>
                <ul className="list-disc list-inside">
                  {profesor.especialidades.length ? (
                    profesor.especialidades.map((especialidades) => (
                      <li key={especialidades.subEspecialidadId}>
                        {especialidades.especialidad?.especialidad || "N/A"}
                      </li>
                    ))
                  ) : (
                    <div className="italic">No especifica</div>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Subespecialidades:</h4>
                <ul className="list-disc list-inside">
                  {profesor.profesorSubEspecialidades.length ? (
                    profesor.profesorSubEspecialidades.map(
                      (subEspecialidad) => (
                        <li key={subEspecialidad.subEspecialidadId}>
                          {subEspecialidad.subEspecialidad?.subespecialidad ||
                            "N/A"}
                        </li>
                      )
                    )
                  ) : (
                    <div className="italic">No especifica</div>
                  )}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="text-right text-sm text-gray-500">
              Creado el: {new Date(profesor.createdAt).toLocaleDateString()}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ProfesoresWidget;
