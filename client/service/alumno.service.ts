"use server";
import axios from "axios";
import { Config } from "@/config/credentials";
import { getAuthHeaders } from "@/utils/supabase/server";
import { IAlumnoClase } from "@/interfaces/IClase";

export const getAlumnoClases = async () => {
  try {
    const headers = await getAuthHeaders();
    const { data } = await axios.get<IAlumnoClase[]>(
      Config.EXPRESS_API_URL + "/account/alumno/clases/",
      {
        headers,
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};

export const realizarMatricula = async (claseId: number) => {
  try {
    const headers = await getAuthHeaders();

    if (!headers) throw Error();

    const data = {
      claseId,
    };

    const { data: res } = await axios.post(
      Config.EXPRESS_API_URL + "/account/alumno/matricula",
      data,
      { headers }
    );

    return res;
  } catch (error) {
    return null;
  }
};
