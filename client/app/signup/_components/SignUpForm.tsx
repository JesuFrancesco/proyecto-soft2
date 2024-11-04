"use client";
import React from "react";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpSchemaType } from "@/schema/SignUpSchema";
import GoogleSignUp from "@/components/widgets/GoogleSignUp";
import { signup } from "@/app/login/actions";
import { Button } from "@/components/ui/button";

const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    const { error, msg } = await signup(data);

    if (!error) {
      toast({
        variant: "default",
        description:
          "Se te ha enviado un correo, entra para validar tu registro.",
      });

      router.push(`/signup/otp?email=${data.email}`);
      return;
    }

    toast({
      variant: "destructive",
      description: `Algo salió mal.\n${msg}`,
    });
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
        Crea tu cuenta
      </h2>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-200 dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Nombre
              </label>
              <div className="mt-1">
                <input
                  id="nombre"
                  {...register("nombre")}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm dark:bg-gray-700 dark:text-white"
                  required
                />
                {errors.nombre && (
                  <span className="text-red-600">{errors.nombre.message}</span>
                )}
              </div>
            </div>

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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm dark:bg-gray-700 dark:text-white"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm dark:bg-gray-700 dark:text-white"
                  required
                />
                {errors.contrasena && (
                  <span className="text-red-600">
                    {errors.contrasena.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-primaryg-700 hover:bg-primaryg-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryg-500 dark:bg-primaryg-500 dark:hover:bg-primaryg-600 dark:focus:ring-offset-gray-800"
              >
                Registrarse
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2">O continúa con</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center">
              <GoogleSignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
