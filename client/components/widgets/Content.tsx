"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import Headline from "../common/Headline";
import WidgetWrapper from "../common/WidgetWrapper";
import ItemGrid from "../common/ItemGrid";

import eduyachaLogo from "@/public/logo.png";

const contentHomeOne = {
  id: "contentOne-on-home-one",
  hasBackground: true,
  header: {
    tagline: "Descripcion",
    title: "Transformamos la educación de su hijo con asesorías personalizadas",
    subtitle: "",
  },
  content:
    "Al inscribir a su hijo en uno de las asesorías ofrecidas por nosotros tendrá acceso a:",
  items: [
    {
      title: "Material Didáctico Exclusivo",
      description:
        "Proporcionamos acceso a recursos educativos de alta calidad, incluyendo videos, guías y ejercicios prácticos, diseñados para complementar el aprendizaje.",
    },
    {
      title: "Seguimiento y Evaluación Continua",
      description:
        "Realizamos un seguimiento del progreso de su hijo mediante evaluaciones periódicas, garantizando que se cumplan los objetivos de aprendizaje establecidos.",
    },
    {
      title: "Flexibilidad Horaria",
      description:
        "Nuestras asesorías se adaptan al horario de su familia, permitiendo que su hijo aprenda cuando le resulte más conveniente.",
    },
    {
      title: "Comunidad de Aprendizaje",
      description:
        "Su hijo formará parte de una comunidad en línea donde podrá interactuar con otros estudiantes, compartir dudas y experiencias, fomentando un aprendizaje colaborativo.",
    },
  ],
  image: {
    src: eduyachaLogo,
    alt: "logo de eduyachin",
  },
  isReversed: false,
  isAfterContent: false,
};

const {
  header,
  content,
  items,
  image,
  isReversed,
  isAfterContent,
  id,
  hasBackground = false,
} = contentHomeOne;

const Descripcion = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <WidgetWrapper
        id={id ? id : ""}
        hasBackground={hasBackground}
        containerClass={`${
          isAfterContent ? "py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20" : ""
        }`}
      >
        {header && (
          <Headline header={header} titleClass="text-3xl sm:text-5xl" />
        )}
        <div className="mx-auto max-w-7xl">
          <div
            className={`md:flex ${
              isReversed ? "md:flex-row-reverse" : ""
            } md:gap-16`}
          >
            <div className="self-center md:basis-1/2">
              {content && (
                <div className="mb-8 lg:mb-12 text-lg text-gray-600 dark:text-slate-400">
                  {content}
                </div>
              )}
              <ItemGrid
                items={items}
                columns={1}
                defaultIcon={Check}
                containerClass="gap-4 md:gap-y-6"
                panelClass="flex max-w-full"
                titleClass="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2"
                descriptionClass="mt-1 text-gray-600 dark:text-slate-400"
                iconClass="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary-900 text-gray-50 mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1"
              />
            </div>
            <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
              {image && (
                <div className="relative m-auto max-w-4xl">
                  <Image
                    className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
                    src={image.src}
                    width={828}
                    height={828}
                    alt={image.alt}
                    sizes="(max-width: 768px) 100vw, 432px"
                    placeholder="blur"
                    quality={50}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </WidgetWrapper>
    </div>
  );
};

export default Descripcion;
