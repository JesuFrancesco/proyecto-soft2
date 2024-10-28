import { z } from "zod";

export const AccountSetupSchema = z.object({
  role: z.enum(["alumno", "profesor"], {
    required_error: "Selecciona tu rol",
  }),
  country: z.string().min(1, { message: "Selecciona tu país" }),
});

export type AccountSetupSchemaType = z.infer<typeof AccountSetupSchema>;
