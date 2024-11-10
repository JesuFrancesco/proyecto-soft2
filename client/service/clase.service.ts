"use server";
import { Config } from "@/config/credentials";
import { IClase } from "@/interfaces/IClase";
import { IEspecialidad } from "@/interfaces/IEspecialidad";
import { CursoFilterSchemaType } from "@/schema/CursoFilterSchema";
import axios from "axios";

export const fetchClases = async () => {
  const { data } = await axios.get<IClase[]>(
    Config.EXPRESS_API_URL + "/clases"
  );
  return data;
};

export const fetchClasesByQuery = async (dataFilter: { query: string }) => {
  const { query: tema } = dataFilter;
  const { data } = await axios.get<IClase[]>(
    Config.EXPRESS_API_URL + `/clases/query/${tema}`
  );
  return data;
};

export const fetchClasesByEspecialidad = async (
  dataFilter: CursoFilterSchemaType
) => {
  const { items: especialidades } = dataFilter;
  const { data } = await axios.post<IClase[]>(
    Config.EXPRESS_API_URL + "/clases/filter-especialidad",
    {
      especialidades,
    }
  );
  return data;
};
