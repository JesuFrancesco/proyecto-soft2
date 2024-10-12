"use client";
import Image from "next/image";
import WidgetWrapper from "@/components/common/WidgetWrapper";
import { useRouter } from "next/navigation";
const coursesData = [
  {
    id: 1,
    name: "Matemáticas Avanzadas",
    section: "Secundaria",
    instructor: "Prof. Mario Bros",
    image:
      "https://i.pinimg.com/736x/53/67/35/5367351a20b215bbbead9f175674fab1.jpg",
  },
  {
    id: 2,
    name: "Ciencias Naturales",
    section: "Secundaria",
    instructor: "Dr. E. Huaranga",
    image:
      "https://i.pinimg.com/736x/53/67/35/5367351a20b215bbbead9f175674fab1.jpg",
  },
  {
    id: 3,
    name: "Literatura Hispanoamericana",
    section: "Secundaria",
    instructor: "Ms. Pepe Mason",
    image:
      "https://i.pinimg.com/736x/53/67/35/5367351a20b215bbbead9f175674fab1.jpg",
  },
  {
    id: 4,
    name: "Programación Básica",
    section: "Secundaria",
    instructor: "Ing. Felix Habil",
    image:
      "https://i.pinimg.com/736x/53/67/35/5367351a20b215bbbead9f175674fab1.jpg",
  },
  {
    id: 5,
    name: "Historia Universal",
    section: "Secundaria",
    instructor: "Prof. Ana Torres",
    image:
      "https://i.pinimg.com/736x/53/67/35/5367351a20b215bbbead9f175674fab1.jpg",
  },
  {
    id: 6,
    name: "Física Cuántica",
    section: "Universidad",
    instructor: "Dr. Albert Rivero",
    image:
      "https://i.pinimg.com/736x/53/67/35/5367351a20b215bbbead9f175674fab1.jpg",
  },
  {
    id: 7,
    name: "Inteligencia Artificial",
    section: "Universidad",
    instructor: "Ing. Clara Robles",
    image:
      "https://i.pinimg.com/736x/53/67/35/5367351a20b215bbbead9f175674fab1.jpg",
  },
  {
    id: 8,
    name: "Economía Global",
    section: "Universidad",
    instructor: "Dr. Pablo Mendoza",
    image:
      "https://i.pinimg.com/736x/53/67/35/5367351a20b215bbbead9f175674fab1.jpg",
  },
  {
    id: 9,
    name: "Diseño Gráfico",
    section: "Técnico",
    instructor: "Ms. Laura Sánchez",
    image:
      "https://i.pinimg.com/736x/53/67/35/5367351a20b215bbbead9f175674fab1.jpg",
  },
  {
    id: 10,
    name: "Robótica Avanzada",
    section: "Técnico",
    instructor: "Ing. Carlos Zavala",
    image:
      "https://i.pinimg.com/736x/53/67/35/5367351a20b215bbbead9f175674fab1.jpg",
  },
];

const CursosDisponibles = () => {
  const router = useRouter();

  const handleViewDetails = (id: number) => {
    router.push(`/curso/${id}`);
  };
  return (
    <WidgetWrapper
      id="my-courses"
      hasBackground={true}
      containerClass="pb-12 md:pb-16 lg:pb-20"
    >
      <div id="general-courses" className="pb-12 md:pb-16 lg:pb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Cursos Disponibles</h2>
          <h1 className="text-4xl sm:text-6xl font-bold">
            Explora Nuestros Cursos
          </h1>
        </div>
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md transition-colors duration-200"
            >
              <Image
                src={course.image}
                alt={`Imagen de ${course.name}`}
                width={500}
                height={120}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-lg font-medium">{course.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{course.section}</p>
              <p className="text-gray-600 dark:text-gray-300">
                {course.instructor}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => handleViewDetails(course.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WidgetWrapper>
  );

};

export default CursosDisponibles;
