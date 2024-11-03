"use server";
import axios, { AxiosError } from "axios";
import { Config } from "@/config/credentials";
import { getAuthHeaders } from "@/utils/supabase/server";
import { axiosErrorHandler } from "@/utils/utils";

export const submitAlumnoAccountSetup = async (data: {
  edad: number;
  preferencias: number[];
}) => {
  try {
    const headers = await getAuthHeaders();

    const { data: responseData } = await axios.post(
      Config.EXPRESS_API_URL + "/account/setup-alumno",
      data,
      { headers }
    );

    return responseData;
  } catch (error) {
    if (error instanceof AxiosError) {
      return axiosErrorHandler(error);
    }

    console.error("error");
    console.error(error);
    return false;
  }
};

export const submitProfesorAccountSetup = async (data: {
  biografia: string;
}) => {
  try {
    const headers = await getAuthHeaders();

    const { data: responseData } = await axios.post(
      Config.EXPRESS_API_URL + "/account/setup-profesor",
      data,
      { headers }
    );

    return responseData;
  } catch (error) {
    if (error instanceof AxiosError) {
      return axiosErrorHandler(error);
    }
    console.error("error");
    console.error(error);

    return false;
  }
};

export const updateCountryLocation = async ({ paisId }: { paisId: string }) => {
  try {
    const headers = await getAuthHeaders();

    const { data: responseData } = await axios.patch(
      Config.EXPRESS_API_URL + "/account/update-country",
      {
        paisId,
      },
      { headers }
    );

    return responseData;
  } catch (error) {
    if (error instanceof AxiosError) {
      return axiosErrorHandler(error);
    }
    console.error("error");
    console.error(error);

    return false;
  }
};

export const updatePeruvianLocation = async (data: {
  departamento: string;
  provincia: string;
  distrito: string;
}) => {
  try {
    const headers = await getAuthHeaders();

    const { data: responseData } = await axios.patch(
      Config.EXPRESS_API_URL + "/account/update-peru-ubigeo",
      {
        departamentoId: data.departamento,
        provinciaId: data.provincia,
        distritoId: data.distrito,
      },
      { headers }
    );

    return responseData;
  } catch (error) {
    if (error instanceof AxiosError) {
      return axiosErrorHandler(error);
    }
    console.error("error");
    console.error(error);

    return false;
  }
};
