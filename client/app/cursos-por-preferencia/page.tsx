import CursosGrid from "@/components/common/CursosGrid";
import WidgetWrapper from "@/components/common/WidgetWrapper";
import { Config } from "@/config/credentials";
import { IAlumno } from "@/interfaces/IAlumno";
import { IClase } from "@/interfaces/IClase";
import { getAuthHeaders } from "@/utils/supabase/server";
import axios from "axios";
import React from "react";

const CursosFavoritosPage = async () => {
  const headers = await getAuthHeaders();
  const { data } = await axios.get<IClase[]>(
    Config.EXPRESS_API_URL + "/account/alumno/clases-by-preferencia",
    {
      headers,
    }
  );

  return (
    <WidgetWrapper
      id="my-favorite-courses"
      hasBackground={false}
      containerClass="pb-12 md:pb-16 lg:pb-20"
    >
      <div className="pb-12 md:pb-16 lg:pb-20">
        <div className="text-center">
          <section className="my-4">
            <h2 className="text-2xl font-bold mb-4">Cursos por preferencia</h2>
            <h1 className="text-4xl sm:text-6xl font-bold">
              Esto te podría interesar
            </h1>
          </section>

          <div className="flex-grow my-4">
            <CursosGrid clases={data} />
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default CursosFavoritosPage;
