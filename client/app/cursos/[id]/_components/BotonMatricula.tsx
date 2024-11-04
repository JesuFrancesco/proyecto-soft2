"use client";

import { Button } from "@/components/ui/button";
import { Config } from "@/config/credentials";
import { realizarMatricula } from "@/service/alumno.service";
import { useState } from "react";

const BotonMatricula = ({ id }: { id: number }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleMatricula = () => {
    setModalOpen(true);
  };

  const handleConfirm = async () => {
    console.log(Config.EXPRESS_API_URL);
    const res = await realizarMatricula(id);

    if (!res) {
      throw new Error();
    }

    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button
        className="bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-secondary-500 transition duration-200 shadow-lg"
        onClick={handleMatricula}
      >
        Matricularme en el curso
      </Button>

      {isModalOpen && (
        <div className="fixed text-black inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="font-semibold mb-4">Confirmación</h2>
            <p>¿Estás seguro de que deseas matricularte en el curso?</p>
            <div className="mt-4 flex justify-end">
              <Button
                className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
                onClick={handleCancel}
              >
                Cancelar
              </Button>
              <Button
                className="bg-primaryg-800 text-white font-semibold py-2 px-4 rounded"
                onClick={handleConfirm}
              >
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BotonMatricula;
