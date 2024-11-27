import { Button } from "@/components/ui/button";
import { useLoading } from "@/hooks/use-loading";
import { toast } from "@/hooks/use-toast";
import { deleteAccount } from "@/service/account.service";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteAccountForm = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const router = useRouter();

  const deleteAccountHandler = async () => {
    try {
      startLoading();

      await deleteAccount();
    } catch (error) {
      // handle errors
    } finally {
      router.push("/");
      stopLoading();
    }
  };

  return (
    <div className="p-12 w-2/3 mx-auto flex flex-col justify-center items-center rounded-lg self-center">
      <h2 className="text-xl font-semibold  mb-4">
        ¿Estás seguro de que quieres eliminar tu cuenta?
      </h2>
      <p className="text-sm  mb-6">Esta acción no se puede deshacer.</p>
      <div className="flex space-x-4">
        <Button
          type="button"
          variant={"destructive"}
          disabled={isLoading}
          onClick={deleteAccountHandler}
          className="px-4 py-2 bg-destructive transition"
        >
          Confirmar
        </Button>
        <Button className="px-4 py-2 rounded bg-primary transition">
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default DeleteAccountForm;
