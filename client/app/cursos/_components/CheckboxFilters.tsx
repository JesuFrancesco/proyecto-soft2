"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Filter, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchEspecialidades } from "@/service/misc.service";
import { IEspecialidad } from "@/interfaces/IEspecialidad";
import { UseFormReturn } from "react-hook-form";
import { CursoFilterSchemaType } from "@/schema/CursoFilterSchema";

export function CheckboxCursosFilter({
  form,
  onSubmit,
}: {
  form: UseFormReturn<CursoFilterSchemaType>;
  onSubmit: (data: CursoFilterSchemaType) => Promise<void>;
}) {
  const { data: especialidades, isLoading: especialidadesLoading } = useQuery<
    IEspecialidad[]
  >({
    queryKey: ["especialidades"],
    queryFn: () => fetchEspecialidades(),
    enabled: true,
    retry: false,
  });

  if (especialidadesLoading) return <Loader2 className="animate-spin" />;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Filtrado</FormLabel>
                <FormDescription>
                  Elige tus elementos para filtrar
                </FormDescription>
              </div>
              {especialidades?.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.especialidad}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
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
