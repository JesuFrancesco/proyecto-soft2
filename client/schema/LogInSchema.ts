import { z } from "zod";

export const LogInSchema = z.object({
  email: z
    .string({
      message: "Correo es requerido",
    })
    .email("Correo electrónico inválido"),
  contrasena: z
    .string({
      message: "Contraseña es requerida",
    })
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export type LoginSchemaType = z.infer<typeof LogInSchema>;
