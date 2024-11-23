import { Config } from "@/config/credentials";
import { IProfesor } from "@/interfaces/IProfesor";
import axios from "axios";
import ProfesoresWidget from "./_components/ProfesoresWidget";

const ProfesoresPage = async () => {
  const { data } = await axios.get<IProfesor[]>(
    `${Config.EXPRESS_API_URL}/profesores`
  );

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Docentes</h2>
        <h1 className="text-4xl sm:text-6xl font-bold">Nuestros profesores</h1>
      </div>
      <ProfesoresWidget />
    </div>
  );
};

export default ProfesoresPage;
