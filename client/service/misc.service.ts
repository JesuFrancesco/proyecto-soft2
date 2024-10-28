"use server";

import { Config } from "@/config/credentials";
import axios from "axios";

export const fetchPaises = async () => {
  const { data } = await axios.get(`${Config.EXPRESS_API_URL}/paises`);
  if (!data) throw Error("Algo salio mal");
  return data;
};
