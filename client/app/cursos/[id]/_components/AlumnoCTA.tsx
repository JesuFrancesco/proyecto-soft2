"use client";
import React, { useEffect } from "react";
import BotonMatricula from "./ui/BotonMatricula";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrentAlumnoClases } from "@/service/account.service";
import { IAlumnoClase } from "@/interfaces/IAlumnoClase";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/common/CTA";
import { Loader2 } from "lucide-react";

const AlumnoCTAButton = ({ id }: { id: number }) => {
  const { data: cursosMatriculados, isLoading } = useQuery<
    IAlumnoClase[] | undefined
  >({
    queryKey: ["mis-cursos"],
    queryFn: () => fetchCurrentAlumnoClases(),
    enabled: true,
    retry: false,
  });

  if (isLoading) return <Loader2 className="animate-spin" />;

  return (
    <div className="text-center mt-8">
      {cursosMatriculados ? (
        cursosMatriculados.some((c) => c.claseId === id) ? (
          <Button variant={"outline"} disabled={true}>
            Ya te encuentras matriculado
          </Button>
        ) : (
          <BotonMatricula id={id} />
        )
      ) : (
        <CallToAction
          callToAction={{
            href: "/signup",
            icon: null,
            targetBlank: false,
            text: "Crea una cuenta para matricularte",
          }}
          linkClass="btn btn-primary m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6"
        />
      )}
    </div>
  );
};

export default AlumnoCTAButton;
