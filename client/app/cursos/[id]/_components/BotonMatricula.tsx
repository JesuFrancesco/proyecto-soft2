"use client";

import { Button } from "@/components/ui/button";
import { realizarMatricula } from "@/service/alumno.service";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const BotonMatricula = ({ id }: { id: number }) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleMatricula = () => {
    setModalOpen(true);
  };

  const handleConfirm = async () => {
    const res = await realizarMatricula(id);

    if (!res) {
      throw new Error();
    }

    toast({
      description: "Se ha realizado tu matrícula correctamente",
    });

    router.push("/mis-cursos");

    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-secondary-500 transition duration-200 shadow-lg"
            onClick={handleMatricula}
          >
            Matricularme en el curso
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmación</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas matricularte en el curso?
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-end">
            <Button
              variant={"destructive"}
              className="font-semibold py-2 px-4 rounded mr-2"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              className="bg-primary text-white font-semibold py-2 px-4 rounded"
              onClick={handleConfirm}
            >
              Confirmar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BotonMatricula;
