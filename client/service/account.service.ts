"use server";
import axios, { AxiosRequestConfig } from "axios";
import { Config } from "@/config/credentials";
import { getSupabaseUserEmail } from "./utils";
import { getAuthHeaders } from "@/utils/supabase/server";
import { AccountSetupSchemaType } from "@/schema/AccountSetupSchema";

export const submitAlumnoAccountSetup = async (
  data: AccountSetupSchemaType
) => {
  try {
    const headers = await getAuthHeaders();

    const config = {
      data,
      headers,
    } as AxiosRequestConfig;

    const { data: responseData } = await axios.post(
      `${Config.EXPRESS_API_URL}/accounts/setup-alumno`,
      config
    );

    return responseData;
  } catch (error) {
    console.error("error");
    console.error(error);

    return error;
  }
};

export const submitProfesorAccountSetup = async (
  data: AccountSetupSchemaType
) => {
  try {
    const headers = await getAuthHeaders();

    const config = {
      data,
      headers,
    } as AxiosRequestConfig;

    const { data: responseData } = await axios.post(
      `${Config.EXPRESS_API_URL}/accounts/setup-profesor`,
      config
    );

    return responseData;
  } catch (error) {
    console.error("error");
    console.error(error);

    return error;
  }
};
