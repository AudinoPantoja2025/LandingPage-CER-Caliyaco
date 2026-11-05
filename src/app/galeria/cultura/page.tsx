import type { Metadata } from "next";
import CulturaEncuentro from "@/components/CulturaEncuentro";
import { CULTURA } from "@/lib/culturaEventos";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata({
  title: "Cultura",
  description:
    "Fotografías del Encuentro de expresiones culturales del Centro Educativo Rural Caliyaco: danzas y presentaciones de nuestros estudiantes.",
  path: "/galeria/cultura",
});

export default function CulturaPage() {
  return <CulturaEncuentro categoria={CULTURA} evento={CULTURA.evento} />;
}
