import * as z from "zod";

export const AssistanceSchema = z.object({
    softwareName: z
      .string()
      .min(1, { message: "El nombre del software es obligatorio" }),
    date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe estar en formato YYYY-MM-DD")
      .refine((date) => !isNaN(new Date(date).getTime()), "La fecha debe ser válida"),
    startTime: z
      .string()
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "La hora debe estar en formato HH:MM (24 horas)"),
    duration: z.preprocess(
      (value) => parseInt(value as string, 10), // Convertir el valor de string a number
      z
        .number()
        .int("La duración debe ser un número entero")
        .positive("La duración debe ser mayor a 0")
    ),
    teacherEmail: z.string().email("Debe ser un correo electrónico válido"),
    monitorEmail: z.string().email("Debe ser un correo electrónico válido"),
  });
  