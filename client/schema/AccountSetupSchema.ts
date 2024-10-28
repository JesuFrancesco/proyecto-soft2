import { z } from "zod";

export const AccountSetupSchema = z.object({
  role: z.enum(["alumno", "profesor"], {
    required_error: "Selecciona tu rol",
  }),
  country: z.string({
    required_error: "Selecciona tu país",
  }),
  departamento: z.string({
    required_error: "Selecciona tu país",
  }),
  provincia: z.string({
    required_error: "Selecciona tu provincia",
  }),
  distrito: z.string({
    required_error: "Selecciona tu distrito",
  }),
  alumno: z
    .object({
      edad: z.number(),
    })
    .optional(),
  profesor: z
    .object({
      biografia: z.string(),
      // TODO: agregar especialidades
    })
    .optional(),
});

export type AccountSetupSchemaType = z.infer<typeof AccountSetupSchema>;
