import Headline from "../common/Headline";
import WidgetWrapper from "../common/WidgetWrapper";
import ItemGrid from "../common/ItemGrid";
import { Search, ListCheck, MapPinCheckInside } from "lucide-react";

const featuresHome = {
  id: "features-on-home",
  hasBackground: false,
  columns: 3,
  header: {
    title: <>La mejor opción para la educación complementaria de tus hijos</>,
    subtitle:
      "Descubre un mundo de aprendizaje divertido y enriquecedor para potenciar su talento.",
    tagline: "Features",
  },
  items: [
    {
      title: "Amplia variedad de materias para todos los intereses",
      description:
        "En Eduyacha, ofrecemos un repertorio diverso de materias que abarcan desde matemáticas y ciencias hasta arte y tecnología. Cada curso está diseñado para fomentar la curiosidad y el amor por el aprendizaje, permitiendo que tus hijos exploren nuevas áreas y descubran sus verdaderas pasiones. ¡Aquí hay algo para cada interesado!",
      icon: Search,
      callToAction: {
        text: "Ver lista de materias",
        href: "/",
      },
    },
    {
      title: "Profesores especializados",
      description:
        "En Eduyacha, contamos con un equipo de educadores altamente calificados y apasionados por su materia. Cada profesor tiene experiencia en su campo y utiliza métodos innovadores para hacer que el aprendizaje sea atractivo y efectivo. Con su guía, tus hijos recibirán atención personalizada y apoyo para alcanzar su máximo potencial.",
      icon: ListCheck,
      callToAction: {
        text: "Ver lista de profesores",
        href: "/",
      },
    },
    {
      title: "Agenda tu asesoría cuándo y donde quieras",
      description:
        "En Eduyacha, la flexibilidad es clave. Te ofrecemos la opción de programar asesorías en el horario y lugar que mejor se adapten a tus necesidades. Ya sea de forma presencial o virtual, nuestros educadores están listos para brindarte el apoyo que necesitas, garantizando que el aprendizaje se ajuste a tu ritmo y estilo de vida. ¡Tu comodidad es nuestra",
      icon: MapPinCheckInside,
      callToAction: {
        text: "Ver disponibilidad de horarios",
        href: "/",
      },
    },
  ],
};
const { id, header, items, columns = 3, hasBackground = false } = featuresHome;

const Features = () => (
  <WidgetWrapper
    id={id ? id : ""}
    hasBackground={hasBackground}
    containerClass="scroll-mt-16 max-w-6xl"
  >
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    <ItemGrid
      id={id}
      items={items}
      columns={columns}
      defaultColumns={2}
      containerClass={`pb-6 ${columns === 2 ? "max-w-5xl" : ""}`}
      panelClass={`flex max-w-full ${
        columns === 2 ? "sm:max-w-md mx-auto" : ""
      }`}
      iconClass="h-12 w-12 flex items-center justify-center rounded-md text-white bg-primary-900 p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
      titleClass="mb-3 text-xl font-bold"
      descriptionClass="text-gray-600 dark:text-slate-400"
      actionClass="justify-start"
    />
  </WidgetWrapper>
);

export default Features;
