"use client";
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
import {
  ProfesorQuerySchema,
  ProfesorQuerySchemaType,
} from "@/schema/ProfesorFilterSchema";
import {
  getAllProfesores,
  getProfesoresByQuery,
} from "@/service/profesor.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const ProfesoresInputFilter = () => {
  const form = useForm<ProfesorQuerySchemaType>({
    resolver: zodResolver(ProfesorQuerySchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(data: ProfesorQuerySchemaType) {
    await refetch();
  }

  const { isFetching, refetch } = useQuery({
    queryKey: ["profesores"],
    queryFn: () =>
      form.getValues().query.length === 0
        ? getAllProfesores()
        : getProfesoresByQuery(form.getValues().query),
    staleTime: Infinity,
  });

  if (isFetching) {
    return <Loader2 className="animate-spin text-yellow-500" />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Busqueda por nombre</FormLabel>
                <FormDescription>
                  Introduce el nombre para filtrar
                </FormDescription>
              </div>
              <FormControl>
                <Input type="text" placeholder="Ej. felix..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          control={form.control}
          name="query"
        />
      </form>
    </Form>
  );
};

export default ProfesoresInputFilter;
