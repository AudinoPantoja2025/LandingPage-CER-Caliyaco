import type { Metadata } from "next";
import Convivencia from "@/components/Convivencia";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata({
  title: "Convivencia escolar",
  description:
    "Derechos y deberes de estudiantes, padres de familia, docentes y directivos del CER Caliyaco, según el Manual de Convivencia Escolar.",
  path: "/convivencia",
});

export default function ConvivenciaPage() {
  return <Convivencia />;
}
