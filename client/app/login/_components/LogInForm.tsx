"use client";
import { login } from "@/app/login/actions";
import GoogleSignUp from "@/components/widgets/GoogleSignUp";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogInSchema, LoginSchemaType } from "@/schema/LogInSchema";
import { Button } from "@/components/ui/button";

const LogInForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LogInSchema),
  });

  const handleLoginSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    const res = await login(data);

    if (!res) {
      toast({
        variant: "destructive",
        content: "Algo salió mal.",
      });
      return;
    }

    toast({
      variant: "default",
      content: "Sesión iniciada.",
    });

    router.push("/");
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Inicia sesión en tu cuenta
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            onSubmit={handleSubmit(handleLoginSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Correo electrónico
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primaryg-500 focus:border-primaryg-500 dark:focus:ring-primaryg-400 dark:focus:border-primaryg-400 sm:text-sm dark:bg-gray-700 dark:text-white"
                  required
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="contrasena"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Contraseña
              </label>
              <div className="mt-1">
                <input
                  id="contrasena"
                  type="password"
                  {...register("contrasena")}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primaryg-500 focus:border-primaryg-500 dark:focus:ring-primaryg-400 dark:focus:border-primaryg-400 sm:text-sm dark:bg-gray-700 dark:text-white"
                  required
                />
                {errors.contrasena && (
                  <span className="text-red-600">
                    {errors.contrasena.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="recordar"
                  name="recordar"
                  type="checkbox"
                  className="h-4 w-4 text-primaryg-600 focus:ring-primaryg-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="recordar"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                >
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primaryg-600 hover:text-primaryg-500 dark:text-primaryg-400 dark:hover:text-primaryg-300"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex font-bold justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm text-white bg-primaryg-600 hover:bg-primaryg-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryg-500  dark:focus:ring-offset-gray-800"
              >
                Iniciar sesión
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  O continúa con
                </span>
              </div>
            </div>

            <div className="mt-6 gap-3 flex flex-col justify-center items-center">
              <GoogleSignUp title="Iniciar sesión con Google" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
