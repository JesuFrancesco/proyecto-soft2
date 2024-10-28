import React from "react";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IPais } from "@/interfaces/IPais";
import { fetchPaises } from "@/service/misc.service";
import { LoaderCircle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AccountSetupSchema,
  AccountSetupSchemaType,
} from "@/schema/AccountSetupSchema";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { submitAlumnoAccountSetup } from "@/service/account.service";
import { capitalizeFirstLetter } from "@/utils/utils";
import { Form, FormField } from "@/components/ui/form";

const AccountSetupForm: React.FC = () => {
  const router = useRouter();
  const form = useForm<AccountSetupSchemaType>({
    resolver: zodResolver(AccountSetupSchema),
  });

  const onSubmit: SubmitHandler<AccountSetupSchemaType> = async (data) => {
    const { error, msg } = await submitAlumnoAccountSetup(data);

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

  const {
    data: paisesData,
    isLoading: paisesLoading,
    error,
    refetch,
  } = useQuery<IPais[]>({
    queryKey: [""],
    queryFn: () => fetchPaises(),
  });

  return (
    <div className="p-12 w-2/3 mx-auto shadow-lg rounded-lg justify-center self-center">
      <h2 className="text-2xl font-bold mb-4 text-center ">
        Cuéntanos más sobre ti
      </h2>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Rol */}
          <div>
            <Label htmlFor="role" className="block mb-2">
              ¿Eres alumno o profesor?
            </Label>
            <FormField
              name="country"
              render={({ field }) => (
                <Select
                  onValueChange={(e) => {
                    console.log(e); // cambiar setup segun el tipo de usuario
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alumno">Alumno</SelectItem>
                    <SelectItem value="profesor">Profesor</SelectItem>
                  </SelectContent>
                </Select>
              )}
            ></FormField>
          </div>
          {/* País */}
          {paisesLoading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <div>
              <Label htmlFor="country" className="block mb-2">
                País de origen
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona tu país" />
                </SelectTrigger>
                <SelectContent>
                  {paisesData &&
                    paisesData.map((pais) => (
                      <SelectItem key={pais.id} value={pais.name}>
                        {pais.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          )}
          {/* Placeholder */}
          <div>
            <Label htmlFor="additionalInfo" className="block mb-2">
              Información adicional
            </Label>
            <Input
              type="text"
              id="additionalInfo"
              placeholder="Escribe aquí cualquier información adicional"
              className="w-full"
            />
          </div>
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
