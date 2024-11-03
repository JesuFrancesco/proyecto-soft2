import { Button } from "@/components/ui/button";
import React from "react";

const DeleteAccountForm = () => {
  return (
    <div className="p-12 w-2/3 mx-auto flex flex-col justify-center items-center rounded-lg self-center">
      <h2 className="text-xl font-semibold  mb-4">
        ¿Estás seguro de que quieres eliminar tu cuenta?
      </h2>
      <p className="text-sm  mb-6">Esta acción no se puede deshacer.</p>
      <div className="flex space-x-4">
        <Button
          onClick={() => console.log("accion ")}
          className="px-4 py-2  bg-red-600 rounded hover:bg-red-700 transition"
        >
          Confirmar
        </Button>
        <Button
          onClick={() => console.log("accion ")}
          className="px-4 py-2  rounded bg-primary-700  transition"
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default DeleteAccountForm;
