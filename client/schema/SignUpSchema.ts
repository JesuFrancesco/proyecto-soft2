import { z } from "zod";

export const SignUpSchema = z.object({
  nombre: z
    .string({
      message: "Nombre es requerido",
    })
    .min(2, "El nombre de usuario debe tener por lo menos 2 letras"),
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

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
