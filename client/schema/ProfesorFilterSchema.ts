import { z } from "zod";

export const ProfesorQuerySchema = z.object({
  query: z.string(),
});

export type ProfesorQuerySchemaType = z.infer<typeof ProfesorQuerySchema>;
