"use client";
import { IAlumnoClase } from "@/interfaces/IClase";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TabContenido from "./ui/TabContenido";
import TabCalendario from "./ui/TabCalendario";
import TabAnuncios from "./ui/TabAnuncios";
import TabDebates from "./ui/TabDebates";
import TabMensajes from "./ui/TabMensajes";
import TabGrupos from "./ui/TabGrupos";
import TabCalificaciones from "./ui/TabCalificaciones";
import TabResenias from "./ui/TabResenias";

const AlumnoCursoWidget = ({ alumnoClase }: { alumnoClase: IAlumnoClase }) => {

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleFavoriteOnClick = async () => {
    toast({
      description: "XDDD",
    });
  };

  const handleCursoSheet = () => {
    setIsSheetOpen(true);
  };

  return (
    <div
      key={alumnoClase.claseId}
      className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md transition-colors duration-200"
    >
      <Image
        src={alumnoClase.clase.materialClase[0].material.assetUrl}
        alt={`Imagen de ${alumnoClase.clase.tema.subespecialidad}`}
        width={500}
        height={120}
        className="rounded-md mb-4 object-cover h-32"
      />
      <h3 className="text-lg font-medium">
        {alumnoClase.clase.tema.subespecialidad}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {alumnoClase.clase.sector.name}
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        <a href={`/profesores/${alumnoClase.clase.profesor.id}`}>
          {alumnoClase.clase.profesor.nombre}
        </a>
      </p>
      <div className="mt-4 flex justify-between items-center">
        <Button
          onClick={handleCursoSheet}
          className="text-white py-2 px-4 rounded-md transition-colors duration-200"
        >
          Acceder
        </Button>
        <Star
          onClick={handleFavoriteOnClick}
          className="hover:fill-yellow-400 hover:cursor-pointer"
        />
      </div>

      <Sheet  open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full h-full flex flex-col">
          <SheetHeader>
            <SheetTitle>
              <div className="text-3xl">
                {alumnoClase.clase.tema.subespecialidad}
              </div>
              <div className="text-sm">
                Profesor: {alumnoClase.clase.profesor.nombre}
              </div>
            </SheetTitle>
            <hr className="bg-slate-600 dark:bg-white py-0.5 rounded-md" />
            <SheetDescription className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              officiis, dolore quidem necessitatibus, officia perspiciatis
              aperiam enim veritatis consectetur illo exercitationem facere quam
              laudantium doloremque nesciunt labore, unde tempora fugiat? Autem
              nemo suscipit quos beatae nisi perferendis illo aliquam molestiae.
              Voluptate quis quaerat iure. Quis, officiis. Praesentium veniam
              iure illo quasi numquam, consequatur, nam rerum perferendis
              asperiores deserunt voluptas nihil! Nobis quasi explicabo
              molestias perferendis, quas, praesentium, quaerat ut magnam
              pariatur laborum dignissimos iure fuga! Magni iste dicta molestiae
              et, ullam consequatur corrupti dolorem a vitae facilis eaque
              numquam quibusdam.
            </SheetDescription>
          </SheetHeader>

          <Tabs defaultValue="account" className="flex-grow">
            <TabsList>
              <TabsTrigger value="contenido">Contenido</TabsTrigger>
              <TabsTrigger value="calendario">Calendario</TabsTrigger>
              <TabsTrigger value="anuncios">Anuncios</TabsTrigger>
              <TabsTrigger value="debates">Debates</TabsTrigger>
              <TabsTrigger value="libro">Libro de calificaciones</TabsTrigger>
              <TabsTrigger value="mensajes">Mensajes</TabsTrigger>
              <TabsTrigger value="grupos">Grupos</TabsTrigger>
              <TabsTrigger value="resenias">Reseñas</TabsTrigger>
            </TabsList>
            <TabsContent value="contenido">
              <TabContenido />
            </TabsContent>

            <TabsContent value="calendario">
              <TabCalendario />
            </TabsContent>

            <TabsContent value="anuncios">
              <TabAnuncios />
            </TabsContent>

            <TabsContent value="debates">
              <TabDebates />
            </TabsContent>

            <TabsContent value="libro">
              <TabCalificaciones />
            </TabsContent>

            <TabsContent value="mensajes">
              <TabMensajes />
            </TabsContent>

            <TabsContent value="grupos">
              <TabGrupos />
            </TabsContent>
            <TabsContent value="resenias">
              <TabResenias reseñas={alumnoClase.clase.claseReviews} clase={alumnoClase.clase} />
            </TabsContent>
          </Tabs>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Cerrar</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AlumnoCursoWidget;
