import Image from "next/image";
import WidgetWrapper from "@/components/common/WidgetWrapper";
import { toggleFavorite } from "./actions";
import { getAlumnoClases } from "@/service/alumno.service";
import { IAlumnoClase } from "@/interfaces/IAlumnoClase";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

const MyCoursesPage = async () => {
  const clases: IAlumnoClase[] = await getAlumnoClases();

  return (
    <WidgetWrapper
      id="my-courses"
      hasBackground={true}
      containerClass="pb-12 md:pb-16 lg:pb-20"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Mis Cursos</h2>
        <h1 className="text-4xl sm:text-6xl font-bold">Cursos Inscritos</h1>
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clases.map((e) => (
          <div
            key={e.claseId}
            className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md transition-colors duration-200"
          >
            <Image
              src={e.clase.materialClase[0].material.assetUrl}
              alt={`Imagen de ${e.clase.tema.subEspecialidad}`}
              width={500}
              height={120}
              className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-lg font-medium">
              {e.clase.tema.subEspecialidad}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {e.clase.sector.name}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <a href={`/profesores/${e.clase.profesor.id}`}>
                {e.clase.profesor.nombre}
              </a>
            </p>
            <div className="mt-4 flex justify-between items-center">
              <Button className="text-white py-2 px-4 rounded-md transition-colors duration-200">
                Acceder
              </Button>
              <form action={toggleFavorite}>
                <input type="hidden" name="courseId" value={e.claseId} />
                <button type="submit">
                  <Trash className="hover:fill-red-400" />
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default MyCoursesPage;
