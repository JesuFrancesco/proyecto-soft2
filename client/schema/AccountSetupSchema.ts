import { z } from "zod";

export const AccountSetupSchema = z.object({
  rol: z.enum(["alumno", "profesor"], {
    required_error: "Selecciona tu rol",
  }),
  pais: z.string({
    required_error: "Selecciona tu país",
  }),
  peru: z
    .object({
      departamento: z.string({
        required_error: "Selecciona tu país",
      }),
      provincia: z.string({
        required_error: "Selecciona tu provincia",
      }),
      distrito: z.string({
        required_error: "Selecciona tu distrito",
      }),
    })
    .optional(),
  alumno: z
    .object({
      edad: z.number(),
      preferencias: z.array(z.number()),
    })
    .optional(),
  profesor: z
    .object({
      edad: z.number(),
      especialidades: z.array(z.number()),
      biografia: z.string(),
    })
    .optional(),
});

export type AccountSetupSchemaType = z.infer<typeof AccountSetupSchema>;
