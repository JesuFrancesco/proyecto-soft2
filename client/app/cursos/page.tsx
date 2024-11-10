"use server";
import WidgetWrapper from "@/components/common/WidgetWrapper";
import WidgetCursos from "./_components/WidgetCursos";

export default async function CursosDisponiblesPage() {
  return (
    <WidgetWrapper
      id="my-courses"
      hasBackground={false}
      containerClass="pb-12 md:pb-16 lg:pb-20"
    >
      <div id="general-courses" className="pb-12 md:pb-16 lg:pb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Cursos Disponibles</h2>
          <h1 className="text-4xl sm:text-6xl font-bold">
            Explora Nuestros Cursos
          </h1>
        </div>
        <WidgetCursos />
      </div>
    </WidgetWrapper>
  );
}
