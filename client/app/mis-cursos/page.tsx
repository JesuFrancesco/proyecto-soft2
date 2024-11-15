import WidgetWrapper from "@/components/common/WidgetWrapper";
import { getAlumnoClases } from "@/service/alumno.service";
import AlumnoCursoWidget from "./_components/AlumnoCursoWidget";

const MisCursosPage = async () => {
  const clases = await getAlumnoClases();

  return (
    <WidgetWrapper
      id="my-courses"
      hasBackground={false}
      containerClass="pb-12 md:pb-16 lg:pb-20"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Mis Cursos</h2>
        <h1 className="text-4xl sm:text-6xl font-bold">Cursos Inscritos</h1>
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clases?.length === 0 ? (
          <h1>No hay nada</h1>
        ) : (
          clases?.map((e, i) => <AlumnoCursoWidget key={i} alumnoClase={e} />)
        )}
      </div>
    </WidgetWrapper>
  );
};

export default MisCursosPage;
