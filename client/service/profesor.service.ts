"use server";

import { Config } from "@/config/credentials";
import { IProfesor } from "@/interfaces/IProfesor";
import axios from "axios";

export const getAllProfesores = async () => {
  const { data } = await axios.get<IProfesor[]>(
    `${Config.EXPRESS_API_URL}/profesores`
  );

  return data;
};

export const getProfesoresByQuery = async (profesorQuery: string) => {
  const { data } = await axios.get<IProfesor[]>(
    `${Config.EXPRESS_API_URL}/profesores/query/${profesorQuery}`
  );

  return data;
};
