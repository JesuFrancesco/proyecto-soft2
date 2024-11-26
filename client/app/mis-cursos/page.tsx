import WidgetWrapper from "@/components/common/WidgetWrapper";
import { getAlumnoClases } from "@/service/alumno.service";
import AlumnoCursoWidget from "./_components/AlumnoCursoWidget";
import {
  fetchCurrentAlumnoClases,
  fetchCurrentProfesorClases,
  fetchCurrentUserRole,
} from "@/service/account.service";

const MisCursosPage = async () => {
  const { role } = (await fetchCurrentUserRole()) as {
    role: "alumno" | "profesor";
  };

  const esAlumno = role === "alumno";

  const clases = esAlumno
    ? await fetchCurrentAlumnoClases()
    : await fetchCurrentProfesorClases();

  return (
    <WidgetWrapper
      id="my-courses"
      hasBackground={false}
      containerClass="pb-12 md:pb-16 lg:pb-20"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Mis Cursos</h2>
        <h1 className="text-4xl sm:text-6xl font-bold">
          {esAlumno ? "Cursos inscritos" : "Cursos que enseñas"}
        </h1>
      </div>

      <div className="my-5 flex flex-col">
        {clases?.length === 0 ? (
          <div className="mx-auto justify-center items-center">
            <h1 className="text-3xl">
              {esAlumno
                ? "No tienes cursos matriculados..."
                : "Actualmente no enseñas ningun curso..."}
            </h1>
          </div>
        ) : (
          <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clases?.map((e, i) => (
              <AlumnoCursoWidget key={i} alumnoClase={e} />
            ))}
          </div>
        )}
      </div>
    </WidgetWrapper>
  );
};

export default MisCursosPage;
