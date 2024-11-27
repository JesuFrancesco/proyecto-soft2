"use client";
import { Button } from "@/components/ui/button";
import { useLoading } from "@/hooks/use-loading";
import { toast } from "@/hooks/use-toast";
import { IMaterialClase } from "@/interfaces/IMaterialEducativo";
import { serverDownloadItem } from "@/service/download.service";
// import { clientDownloadItem } from "@/utils/utils";
import { Download, Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const MaterialCursoWidget = ({ item }: { item: IMaterialClase }) => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const handleDescargaMaterial = async () => {
    try {
      startLoading();
      toast({ description: "¡Iniciando descarga!" });

      const { buffer, type } = await serverDownloadItem(item.material.assetUrl);

      const reconstructedBlob = new Blob([new Uint8Array(buffer)], { type });

      const blobUrl = URL.createObjectURL(reconstructedBlob);

      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = item.material.nombre;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      URL.revokeObjectURL(blobUrl);
      toast({ description: "¡Descarga completada!" });
    } catch (error) {
      toast({ variant: "destructive", description: "Algo salio mal" });
    } finally {
      stopLoading();
    }
  };
  return (
    <div
      key={item.id}
      className="rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 relative"
    >
      <h3 className="font-semibold text-lg mb-4">{item.material.nombre}</h3>
      <div className="relative">
        <Image
          src={item.material.assetUrl}
          alt={item.material.nombre}
          width={400}
          height={300}
          className="w-full h-[300px] object-cover rounded-md"
        />
        {isLoading ? (
          <Loader2 className="absolute top-2 right-2 animate-spin" />
        ) : (
          <Button
            variant={"ghost"}
            onClick={handleDescargaMaterial}
            className="absolute top-2 right-2 p-2 rounded-full transition"
          >
            <Download className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default MaterialCursoWidget;
