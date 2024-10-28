import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { IUbigeo } from "@/interfaces/Ubigeos";
import {
  fetchDepartamentos,
  fetchDistritos,
  fetchPaises,
  fetchProvincias,
} from "@/service/misc.service";
import { LoaderCircle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AccountSetupSchema,
  AccountSetupSchemaType,
} from "@/schema/AccountSetupSchema";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  submitAlumnoAccountSetup,
  submitProfesorAccountSetup,
} from "@/service/account.service";

const AccountSetupForm: React.FC = () => {
  const [esAlumno, setEsAlumno] = useState<boolean | null>(null);
  const [esPeruano, setEsPeruano] = useState<boolean | null>(null);

  const { data: paisesData, isLoading: paisesIsLoading } = useQuery<IUbigeo[]>({
    queryKey: ["paises"],
    queryFn: () => fetchPaises(),
    retry: false,
  });

  const {
    data: departamentosData,
    isFetching: departamentosIsFetching,
    refetch: departamentosRefetch,
  } = useQuery<IUbigeo[]>({
    retry: false,
    queryKey: ["departamentos"],
    queryFn: () => fetchDepartamentos(),
    enabled: false,
  });

  const {
    data: provinciasData,
    isFetching: provinciasIsFetching,
    refetch: provinciasRefetch,
  } = useQuery<IUbigeo[]>({
    retry: false,
    queryKey: ["provincias"],
    queryFn: () => fetchProvincias(form.getValues().departamento),
    enabled: false,
  });

  const {
    data: distritosData,
    isFetching: distritosIsFetching,
    refetch: distritosRefetch,
  } = useQuery<IUbigeo[]>({
    retry: false,
    queryKey: ["distritos"],
    queryFn: () =>
      fetchDistritos(form.getValues().departamento, form.getValues().provincia),
    enabled: false,
  });

  const form = useForm<AccountSetupSchemaType>({
    resolver: zodResolver(AccountSetupSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<AccountSetupSchemaType> = async (data) => {
    const { role } = data;
    const { error, msg } =
      role === "alumno"
        ? await submitAlumnoAccountSetup(data)
        : await submitProfesorAccountSetup(data);

    if (!error) {
      toast({
        variant: "default",
        description: "Se han validado tus datos.",
      });
      router.push(`/cuenta`);
      return;
    }
    toast({
      variant: "destructive",
      description: `Algo salió mal.\n${msg}`,
    });
  };

  return (
    <div className="p-12 w-2/3 mx-auto shadow-lg rounded-lg justify-center self-center">
      <h2 className="text-2xl font-bold mb-4 text-center ">
        Termina de configurar tu cuenta
      </h2>

      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset className="space-y-6">
            {/* Rol */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2">
                    ¿Eres alumno o profesor?
                  </FormLabel>
                  <Select
                    onValueChange={(e) => {
                      field.onChange(e);
                      setEsAlumno(e === "alumno");
                    }}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="alumno">Alumno</SelectItem>
                      <SelectItem value="profesor">Profesor</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* País */}
            <FormField
              disabled={paisesIsLoading}
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2">País de origen</FormLabel>
                  {paisesIsLoading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    <Select
                      value={field.value}
                      onValueChange={(e) => {
                        field.onChange(e);
                        if (e === "173") {
                          // codigo para peru
                          setEsPeruano(true);
                          departamentosRefetch();
                        } else {
                          setEsPeruano(false);
                        }
                      }}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecciona tu país" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {paisesData &&
                          paisesData.map((pais) => (
                            <SelectItem key={pais.id} value={pais.id}>
                              {pais.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Pais.Peru */}
            {esPeruano && (
              <>
                <FormField
                  disabled={departamentosIsFetching}
                  name="departamento"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-2">Departamento</FormLabel>
                      {departamentosIsFetching ? (
                        <LoaderCircle className="animate-spin" />
                      ) : (
                        <Select
                          value={field.value}
                          onValueChange={(e) => {
                            field.onChange(e);
                            form.resetField("provincia");
                            form.resetField("distrito");
                            form.setValue("distrito", "");
                            provinciasRefetch();
                          }}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecciona tu departamento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {departamentosData &&
                              departamentosData.map((departamento) => (
                                <SelectItem
                                  key={departamento.id}
                                  value={departamento.id}
                                >
                                  {departamento.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="provincia"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-2">Provincia</FormLabel>
                      {provinciasIsFetching ? (
                        <LoaderCircle className="animate-spin" />
                      ) : (
                        <Select
                          value={field.value}
                          disabled={!form.getFieldState("departamento").isDirty}
                          onValueChange={(e) => {
                            field.onChange(e);
                            form.resetField("distrito");
                            distritosRefetch();
                          }}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecciona tu provincia" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {provinciasData &&
                              provinciasData.map((provincia) => (
                                <SelectItem
                                  key={provincia.id}
                                  value={provincia.id}
                                >
                                  {provincia.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="distrito"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-2">Distrito</FormLabel>
                      {distritosIsFetching ? (
                        <LoaderCircle className="animate-spin" />
                      ) : (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={!form.getFieldState("provincia").isDirty}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecciona tu distrito" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {distritosData &&
                              distritosData.map((distrito) => (
                                <SelectItem
                                  key={distrito.id}
                                  value={distrito.id}
                                >
                                  {distrito.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Alumno adicional */}
            {esAlumno === null ? null : esAlumno ? (
              <>
                {/* Edad */}
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-2">
                        País de origen
                      </FormLabel>
                      {paisesIsLoading ? (
                        <LoaderCircle className="animate-spin" />
                      ) : (
                        <Select
                          value={field.value}
                          onValueChange={(e) => {
                            field.onChange(e);
                            if (e === "173") {
                              // codigo para peru
                              setEsPeruano(true);
                              departamentosRefetch();
                            } else {
                              setEsPeruano(false);
                            }
                          }}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecciona tu país" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {paisesData &&
                              paisesData.map((pais) => (
                                <SelectItem key={pais.id} value={pais.id}>
                                  {pais.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="alumno.edad"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿Qué edad tienes?</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={4}
                          placeholder="Tu edad"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            ) : (
              <FormField
                control={form.control}
                name="profesor.biografia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Biografía</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos sobre ti..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </fieldset>

          {/* Botón de envío */}
          <Button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-500 text-white font-semibold py-2 rounded"
          >
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AccountSetupForm;
