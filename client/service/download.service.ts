"use server";

export const serverDownloadItem = async (uri: string) => {
  const response = await fetch(uri);

  if (!response.ok) {
    throw new Error("Error al descargar el material");
  }

  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();

  return {
    buffer: Array.from(new Uint8Array(arrayBuffer)),
    type: blob.type,
  };
};
