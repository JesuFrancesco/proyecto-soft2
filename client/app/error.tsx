"use client";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-radial from-primary to-black">
      <h1 className="text-9xl font-bold text-white mb-4">500</h1>
      <h2 className="text-4xl text-white font-semibold">Algo salio mal</h2>
      <p className="text-lg text-white mt-4">
        Lo sentimos! Algo salio mal por nuestra parte. Intente de nuevo más
        tarde.
      </p>
      <a href="/">
        <Button className="mt-6 px-4 py-2 dark:text-white font-semibold rounded-lg shadow-md transition duration-300">
          Volver a inicio
        </Button>
      </a>
    </div>
  );
};

export default ErrorPage;
