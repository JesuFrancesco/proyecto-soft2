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
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full">
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

          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="contenido">Contenido</TabsTrigger>
              <TabsTrigger value="calendario">Calendario</TabsTrigger>
              <TabsTrigger value="anuncios">Anuncios</TabsTrigger>
              <TabsTrigger value="debates">Debates</TabsTrigger>
              <TabsTrigger value="libro">Libro de calificaciones</TabsTrigger>
              <TabsTrigger value="mensajes">Mensajes</TabsTrigger>
              <TabsTrigger value="grupos">Grupos</TabsTrigger>
            </TabsList>
            <TabsContent value="contenido">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Temas del curso</h4>
                <ul className="list-disc list-inside">
                  <li>Introducción al tema</li>
                  <li>Conceptos clave</li>
                  <li>Actividades prácticas</li>
                  <li>Recursos adicionales</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="calendario">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Próximos eventos</h4>
                <ul className="list-none">
                  <li>📅 Examen: 15 de Noviembre</li>
                  <li>📅 Clase en vivo: 20 de Noviembre</li>
                  <li>📅 Proyecto final: 30 de Noviembre</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="anuncios">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Anuncios recientes</h4>
                <p>📢 La clase del jueves se reprograma al viernes.</p>
                <p>
                  📢 Nuevo material de lectura disponible en la sección de
                  recursos.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="debates">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Foro de debates</h4>
                <p>
                  💬 <b>Juan Pérez:</b> ¿Qué opinan sobre el tema de la última
                  clase?
                </p>
                <p>
                  💬 <b>María López:</b> Me pareció muy interesante,
                  especialmente la parte sobre...
                </p>
                <p>
                  💬 <b>Iniciar un nuevo debate...</b>
                </p>
              </div>
            </TabsContent>

            <TabsContent value="libro">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">
                  Libro de calificaciones
                </h4>
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-2 py-1">Actividad</th>
                      <th className="px-2 py-1">Calificación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-2 py-1">Examen parcial</td>
                      <td className="px-2 py-1">85/100</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1">Proyecto 1</td>
                      <td className="px-2 py-1">90/100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="mensajes">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Mensajes de la clase</h4>
                <p>
                  📩 <b>Profesor:</b> Recuerden revisar el material para la
                  próxima clase.
                </p>
                <p>
                  📩 <b>Alumno:</b> ¿Podría aclarar la tarea asignada?
                </p>
              </div>
            </TabsContent>

            <TabsContent value="grupos">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Grupos de trabajo</h4>
                <p>👥 Grupo 1: Juan, María, Carlos</p>
                <p>👥 Grupo 2: Ana, Jorge, Sara</p>
                <Button className="mt-2">Unirse a un grupo</Button>
              </div>
            </TabsContent>
          </Tabs>
          <SheetFooter>
            {/* <SheetClose asChild>
              <Button type="submit">Cerrar</Button>
            </SheetClose> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AlumnoCursoWidget;
