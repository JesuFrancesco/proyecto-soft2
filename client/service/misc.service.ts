"use server";

import { Config } from "@/config/credentials";
import axios from "axios";

export const fetchPaises = async () => {
  const { data } = await axios.get(`${Config.EXPRESS_API_URL}/paises`);
  if (!data) throw Error("Algo salio mal");
  return data;
};

export const fetchDepartamentos = async () => {
  const { data } = await axios.get(
    `${Config.EXPRESS_API_URL}/ubigeos/departamentos`
  );
  if (!data) throw Error("Algo salio mal");
  return data;
};

export const fetchProvincias = async (departamentoId: string) => {
  const { data } = await axios.get(
    `${Config.EXPRESS_API_URL}/ubigeos/provincias?departamentoId=${departamentoId}`
  );
  if (!data) throw Error("Algo salio mal");
  return data;
};

export const fetchDistritos = async (
  departamentoId: string,
  provinciaId: string
) => {
  const { data } = await axios.get(
    `${Config.EXPRESS_API_URL}/ubigeos/distritos?departamentoId=${departamentoId}&provinciaId=${provinciaId}`
  );
  if (!data) throw Error("Algo salio mal");
  return data;
};
