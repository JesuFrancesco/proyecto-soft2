"use client";
import React, { useMemo } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { getAllProfesores } from "@/service/profesor.service";
import { Loader2 } from "lucide-react";
import ProfesoresInputFilter from "./ProfesoresFilter";
import { Badge } from "@/components/ui/badge";

const ProfesoresWidget = () => {
  const { data: profesores, isFetching } = useQuery({
    queryKey: ["profesores"],
    queryFn: () => getAllProfesores(),
    staleTime: Infinity,
  });

  const hayProfesores = useMemo(
    () => !profesores || profesores.length === 0,
    [profesores]
  );

  const router = useRouter();

  if (isFetching) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  return (
    <div className="p-6">
      <ProfesoresInputFilter />
      {hayProfesores ? (
        <div className="text-center text-3xl mt-12">
          🙁 No encontramos profesores con ese nombre...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {profesores!.map((profesor) => (
            <motion.div
              key={profesor.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="shadow-md border rounded-xl hover:shadow-2xl transition duration-300">
                <CardHeader
                  onClick={() => router.push(`/profesores/${profesor.id}`)}
                  className="flex flex-col items-center cursor-pointer p-4"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={profesor.imageUrl}
                      width={512}
                      height={512}
                      alt={profesor.nombre}
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold mt-4">
                    {profesor.nombre}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm mb-2">
                    <span className="font-medium">Edad:</span> {profesor.edad}
                  </p>
                  <div className="mb-2">
                    <h4 className="font-medium">Especialidades:</h4>
                    <ul className="flex flex-wrap gap-2 mt-1">
                      {profesor.especialidades.length ? (
                        profesor.especialidades.map((especialidades) => (
                          <Badge
                            key={especialidades.subEspecialidadId}
                            className="badge"
                          >
                            {especialidades.especialidad?.especialidad || "N/A"}
                          </Badge>
                        ))
                      ) : (
                        <div className="italic">No especifica</div>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Subespecialidades:</h4>
                    <ul className="flex flex-wrap gap-2 mt-1">
                      {profesor.profesorSubEspecialidades.length ? (
                        profesor.profesorSubEspecialidades.map(
                          (subEspecialidad) => (
                            <Badge
                              key={subEspecialidad.subEspecialidadId}
                              className="badge"
                            >
                              {subEspecialidad.subEspecialidad
                                ?.subespecialidad || "N/A"}
                            </Badge>
                          )
                        )
                      ) : (
                        <div className="italic">No especifica</div>
                      )}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-4 text-right text-xs">
                  Creado el: {new Date(profesor.createdAt).toLocaleDateString()}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfesoresWidget;
