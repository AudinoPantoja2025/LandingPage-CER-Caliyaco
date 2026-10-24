import type { Metadata } from "next";
import Matriculas from "@/components/Matriculas";
import Uniformes from "@/components/Uniformes";
import ScrollToTop from "@/components/ScrollToTop";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata({
  title: "Matrículas",
  description:
    "Proceso de matrícula del CER Caliyaco: pasos, documentos requeridos, preguntas frecuentes y uniformes reglamentarios para Preescolar, Primaria y Secundaria.",
  path: "/matriculas",
});

export default function MatriculasPage() {
  return (
    <>
      <ScrollToTop />
      <Matriculas />
      <Uniformes />
    </>
  );
}
