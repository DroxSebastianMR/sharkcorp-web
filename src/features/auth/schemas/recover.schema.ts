import { z } from "zod";

export const recoverSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Ingresa tu correo electrónico.")
    .email("Ingresa un correo electrónico válido."),
});

export type RecoverFormValues = z.infer<typeof recoverSchema>;
