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
  fetchEspecialidades,
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
  updateCountryLocation,
  updatePeruvianLocation,
} from "@/service/account.service";
import { FancyMultiSelect } from "@/components/ui/fancy-multiselect";
import { IEspecialidad } from "@/interfaces/IEspecialidad";
import { isNumeric } from "@/utils/utils";

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
    queryFn: () =>
      fetchProvincias(form.getValues().peru?.departamento as string),
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
      fetchDistritos(
        form.getValues().peru?.departamento as string,
        form.getValues().peru?.provincia as string
      ),
    enabled: false,
  });

  const especialidadesQuery = useQuery<IEspecialidad[]>({
    retry: false,
    queryKey: ["especialidades"],
    queryFn: () => fetchEspecialidades(),
  });

  const form = useForm<AccountSetupSchemaType>({
    resolver: zodResolver(AccountSetupSchema),
    defaultValues: {
      alumno: {
        preferencias: [],
      },
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<AccountSetupSchemaType> = async (data) => {
    const { rol } = data;

    // update location
    try {
      const { pais } = data;

      await updateCountryLocation({
        paisId: pais,
      });

      if (pais === "173" && data.peru) {
        await updatePeruvianLocation(data.peru);
      }

      const roleSetupMap = {
        alumno: submitAlumnoAccountSetup,
        profesor: submitProfesorAccountSetup,
      };

      if (data[rol]) {
        const { error, msg } = await roleSetupMap[rol](
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          rol === "alumno" ? (data.alumno as any) : (data.profesor as any)
        );
        if (error) throw new Error(msg);
      }

      toast({
        variant: "default",
        description: "Se han validado tus datos.",
      });

      router.push(`/cuenta`);
    } catch (error) {
      toast({
        variant: "destructive",
        description: `Algo salió mal.\n${error as Error}`,
      });
    }
  };

  return (
    <div className="p-12 w-2/3 mx-auto shadow-lg rounded-lg justify-center self-center">
      <h2 className="text-2xl font-bold text-center mb-20">
        Termina de configurar tu cuenta
      </h2>

      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset className="space-y-6">
            {/* Rol */}
            <FormField
              control={form.control}
              name="rol"
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
              name="pais"
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
                  name="peru.departamento"
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
                            form.resetField("peru.provincia");
                            form.resetField("peru.distrito");
                            form.setValue("peru.distrito", "");
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
                  name="peru.provincia"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-2">Provincia</FormLabel>
                      {provinciasIsFetching ? (
                        <LoaderCircle className="animate-spin" />
                      ) : (
                        <Select
                          value={field.value}
                          disabled={
                            !form.getFieldState("peru.departamento").isDirty
                          }
                          onValueChange={(e) => {
                            field.onChange(e);
                            form.resetField("peru.distrito");
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
                  name="peru.distrito"
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
                          disabled={
                            !form.getFieldState("peru.provincia").isDirty
                          }
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

            {/* FORM Alumno */}
            {esAlumno === null ? null : esAlumno ? (
              <>
                {/* Especialidades */}
                <FormField
                  control={form.control}
                  name="alumno.preferencias"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-2">
                        Ingresa tus gustos académicos
                      </FormLabel>
                      {especialidadesQuery.isLoading ? (
                        <LoaderCircle className="animate-spin" />
                      ) : (
                        <FancyMultiSelect
                          data={(
                            especialidadesQuery.data as IEspecialidad[]
                          ).map((e) => ({
                            value: e.id,
                            label: e.especialidad,
                          }))}
                          selected={field.value}
                          setSelected={field.onChange}
                        />
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Edad */}
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
                          title="Edad"
                          pattern="[0-9]*"
                          onChange={(e) => {
                            if (isNumeric(e.currentTarget.value))
                              field.onChange(parseInt(e.currentTarget.value));
                          }}
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
            className="w-full bg-primary hover:bg-primaryg-500 text-white font-semibold py-2 rounded"
          >
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AccountSetupForm;
