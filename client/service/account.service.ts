"use server";
import axios, { AxiosError } from "axios";
import { Config } from "@/config/credentials";
import { getAuthHeaders } from "@/utils/supabase/server";
import { axiosErrorHandler } from "@/utils/utils";
import { IAlumnoClase } from "@/interfaces/IAlumnoClase";

export const fetchCurrentUserRole = async () => {
  const headers = await getAuthHeaders();

  try {
    const { data } = await axios.get<{ role: string }>(
      `${Config.EXPRESS_API_URL}/account/role`,
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

export const fetchCurrentAlumnoClases = async () => {
  try {
    const headers = await getAuthHeaders();
    const { data } = await axios.get<IAlumnoClase[]>(
      `${Config.EXPRESS_API_URL}/account/alumno/clases`,
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

export const fetchCurrentProfesorClases = async () => {
  const headers = await getAuthHeaders();

  try {
    const { data } = await axios.get<IAlumnoClase[]>(
      `${Config.EXPRESS_API_URL}/account/profesor/clases`,
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
  edad: number;
  biografia: string;
  especialidades: number[];
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

export const deleteAccount = async () => {
  try {
    const headers = await getAuthHeaders();
    const response = await axios.delete(Config.EXPRESS_API_URL + "/account", {
      headers,
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return axiosErrorHandler(error);
    }
    console.error("error");
    console.error(error);

    return false;
  }
};
