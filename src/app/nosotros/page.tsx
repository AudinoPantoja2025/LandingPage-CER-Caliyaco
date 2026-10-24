import type { Metadata } from "next";
import Nosotros from "@/components/Nosotros";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata({
  title: "Nosotros",
  description:
    "Identidad del CER Caliyaco: misión, visión 2030, filosofía, valores, principios, perfiles y las 8 sedes rurales en Mocoa, Putumayo.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return <Nosotros />;
}