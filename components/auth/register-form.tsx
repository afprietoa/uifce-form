"use client";
import React, { useState } from "react";
import CardWrapper from "./card-wrapper";
import { AssistanceSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";

const AssistanceForm = () => {
  const [loading, setLoading] = useState(false);

// ✅ Solución: Especificamos el tipo del formulario
const form = useForm<z.infer<typeof AssistanceSchema>>({
  resolver: zodResolver(AssistanceSchema),
  mode: "onBlur", // Validaciones al perder el foco
  defaultValues: {
    softwareName: "",
    date: "",
    startTime: "",
    duration: 1, // puede quedarse como string aquí
    teacherEmail: "",
    monitorEmail: "",
  },
});

  const onSubmit = (data: z.infer<typeof AssistanceSchema>) => {
    setLoading(true);
    console.log("Form submitted: ", data); // Ahora los datos ya tienen `duration` como número
    setLoading(false);
  };

  return (
    <CardWrapper
      label="Registrar Asistencia Docente"
      title="Registro de Asistencia"
      backBtnHref="/"
      backBtnLabel="Volver al inicio"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="softwareName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del software</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ejemplo: Microsoft Word" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha de la asistencia</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2">
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hora de inicio</FormLabel>
                  <FormControl>
                    <Input {...field} type="time" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duración (en horas)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="1" step="1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <FormField
              control={form.control}
              name="teacherEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo del docente</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="docente@ejemplo.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="monitorEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo del monitor</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="monitor@ejemplo.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Registrando..." : "Registrar Asistencia"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default AssistanceForm;


