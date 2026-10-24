import type { Metadata } from "next";
import NivelesEnsenanza from "@/components/NivelesEnsenanza";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata({
  title: "Niveles de enseñanza",
  description:
    "Preescolar, básica primaria y básica secundaria en el CER Caliyaco: jornadas y horarios oficiales del Manual de Convivencia 2025 en Mocoa, Putumayo.",
  path: "/niveles-de-ensenanza",
});

export default function NivelesEnsenanzaPage() {
  return <NivelesEnsenanza />;
}
