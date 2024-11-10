import { z } from "zod";

export const CursoFilterSchema = z.object({
  items: z.array(z.number({ message: "no es numero we" })),
});

export type CursoFilterSchemaType = z.infer<typeof CursoFilterSchema>;

export const CursoQuerySchema = z.object({
  query: z.string().min(1, "Ingresa un término de búsqueda"),
});

export type CursoQuerySchemaType = z.infer<typeof CursoQuerySchema>;
