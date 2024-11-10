"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Filter, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { UseFormReturn } from "react-hook-form";
import { fetchClasesByQuery } from "@/service/clase.service";
import { IClase } from "@/interfaces/IClase";
import { CursoQuerySchemaType } from "@/schema/CursoFilterSchema";

export function TextInputCursosFilter({
  form,
}: {
  form: UseFormReturn<CursoQuerySchemaType>;
}) {
  const { refetch } = useQuery<IClase[]>({
    queryKey: ["clases"],
    queryFn: () => fetchClasesByQuery(form.getValues()),
    enabled: false,
    retry: false,
  });

  async function onSubmit(data: CursoQuerySchemaType) {
    await refetch();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Filtro</FormLabel>
                <FormDescription>
                  Introduce el texto para filtrar
                </FormDescription>
              </div>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Escribe aquí el criterio de búsqueda"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <Filter />
          Filtrar
        </Button>
      </form>
    </Form>
  );
}
