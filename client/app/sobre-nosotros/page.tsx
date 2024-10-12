import Image from "next/image";
import { Check } from "lucide-react";

import WidgetWrapper from "@/components/common/WidgetWrapper";
import imgVirtual from "@/public/images/claseVirtual.jpg";

const contentAboutUs = {
  id: "content-about-us",
  hasBackground: true,
  header: {
    tagline: "Sobre Nosotros",
    title: "EduYacha: Transformando la Educación Complementaria",
  },
  content:
    "EduYacha es una plataforma educativa diseñada para mejorar el rendimiento académico de los estudiantes a través de clases pregrabadas, asesoramiento continuo y un enfoque en la comunicación fluida entre estudiantes, profesores y padres de familia.",
  items: [
    {
      title: "Misión",
      description:
        "Facilitar el acceso a recursos educativos complementarios que ayuden a mejorar el rendimiento académico de estudiantes de primaria y secundaria en todo el país.",
    },
    {
      title: "Visión",
      description:
        "Ser la plataforma educativa líder en el país, ofreciendo herramientas accesibles y efectivas para estudiantes, con el objetivo de mejorar la calidad de la educación y fomentar el desarrollo profesional.",
    },
    {
      title: "Acceso Multiplataforma",
      description:
        "EduYacha puede ser utilizada en cualquier lugar, ya sea desde un celular, laptop o computadora, brindando flexibilidad en el aprendizaje.",
    },
    {
      title: "Panel de Control Interactivo",
      description:
        "Monitorea el progreso académico a través de un dashboard interactivo diseñado para facilitar el seguimiento del rendimiento de los estudiantes.",
    },
  ],
  image: {
    src: imgVirtual,
    alt: "Logo de EduYacha",
  },
  isReversed: false,
};

const {
  header,
  content,
  items,
  image,
  id,
  hasBackground,
} = contentAboutUs;

const SobreNosotrosPage = () => {
  return (
    <WidgetWrapper
      id={id ? id : ""}
      hasBackground={hasBackground}
      containerClass="py-12"
    >
      {header && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">{header.tagline}</h2>
          <h1 className="text-4xl sm:text-6xl font-bold">{header.title}</h1>
        </div>
      )}

      <div className="mx-auto max-w-7xl mb-12">
        {image && (
          <div className="relative m-auto mb-12 max-w-2xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-md bg-white dark:bg-slate-800">
              <div className="flex items-center mb-2">
                <Check className="text-primary-900 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default SobreNosotrosPage;