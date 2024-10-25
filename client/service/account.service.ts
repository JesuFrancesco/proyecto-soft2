"use server";
import axios from "axios";
import { Config } from "@/config/credentials";
import { getSupabaseUserEmail } from "./utils";

export const registerCallback = async () => {
  try {
    const email = await getSupabaseUserEmail();

    const data = {
      email,
    };

    const cuentaCreada = await axios.post(
      Config.EXPRESS_API_URL + "/accounts/alumno",
      {
        ...data,
        alumno: {
          create: {
            nombre: data.email,
            edad: 12,
          },
        },
      }
    );

    return cuentaCreada;
  } catch (error) {
    console.error("error");
    console.error(error);

    return null;
  }
};
