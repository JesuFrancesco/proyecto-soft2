import { AxiosError } from "axios";

export function zodGetDirtyValues<
  DirtyFields extends Record<string, unknown>,
  Values extends Record<keyof DirtyFields, unknown>
>(dirtyFields: DirtyFields, values: Values): Partial<typeof values> {
  const dirtyValues = Object.keys(dirtyFields).reduce((prev, key) => {
    if (!dirtyFields[key]) return prev;

    return {
      ...prev,
      [key]:
        typeof dirtyFields[key] === "object"
          ? zodGetDirtyValues(
              dirtyFields[key] as DirtyFields,
              values[key] as Values
            )
          : values[key],
    };
  }, {});

  return dirtyValues;
}

export function capitalizeFirstLetter(cadena: string) {
  return String(cadena).charAt(0).toUpperCase() + String(cadena).slice(1);
}

export function isNumeric(str: string) {
  return /^\d+$/.test(str);
}

export const axiosErrorHandler = (error: AxiosError) => ({
  error: true,
  msg: error.message,
});

export const obtenerPromediosObject = () => {
  return {
    olamundo: "",
  };
};

export const clientDownloadItem = async (uri: string, name?: string) => {
  const response = await fetch(uri);
  if (!response.ok) {
    throw new Error("Error al descargar el material");
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name || "archivo";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
};
