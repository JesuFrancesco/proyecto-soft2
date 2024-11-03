"use server";
import { getSupabaseUserEmail } from "./utils";
import axios from "axios";
import { Config } from "@/config/credentials";
import { getAuthHeaders } from "@/utils/supabase/server";

export const getAlumnoByEmail = async () => {
  try {
    const email = await getSupabaseUserEmail();

    const { data } = await axios.get(
      Config.EXPRESS_API_URL + "/alumnos/email/" + email
    );

    return data;
  } catch (error) {
    return null;
  }
};

export const getAlumnoClases = async () => {
  try {
    const headers = await getAuthHeaders();
    const { data } = await axios.get(
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
  // try {
  //   const alumno: any = await getAlumnoByEmail();
  //   console.log("alumno");
  //   const data = {
  //     alumnoId: alumno?.id,
  //     claseId,
  //   };
  //   const { data: res } = await axios.post(
  //     Config.EXPRESS_API_URL + "/clases/matricula",
  //     data
  //   );
  //   return res;
  // } catch (error) {
  //   return null;
  // }
};
