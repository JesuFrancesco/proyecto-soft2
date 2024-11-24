"use server";

import axios, { AxiosError } from "axios";
import { Config } from "@/config/credentials";
import { getAuthHeaders } from "@/utils/supabase/server";
import { IAlumnoClase } from "@/interfaces/IAlumnoClase";
import { IClaseReview, IProfesorReview } from "@/interfaces/IReview";

export const postReseniaDeProfesor = async () => {
  const headers = await getAuthHeaders();

  try {
    const { data } = await axios.post<IProfesorReview[]>(
      `${Config.EXPRESS_API_URL}/profesor-reviews`,
      {
        headers: headers,
      }
    );

    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err);
      throw new Error("Algo salio mal");
    }
  }
};

export const postReseniaDeClase = async (data: IClaseReview) => {
  const headers = await getAuthHeaders();

  try {
    const response = await axios.post<IClaseReview>(
      `${Config.EXPRESS_API_URL}/clase-reviews`,
      data,
      { headers }
    );

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err);
      throw new Error("Algo salió mal al enviar la reseña.");
    }
  }
};

