import type { Metadata } from "next";
import Galeria from "@/components/Galeria";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata({
  title: "Galería",
  description:
    "Fotografías de las sedes del Centro Educativo Rural Caliyaco: Caliyaco, San Luis de Chontayaco, Guaduales, Líbano, Villa Rosa, Paraíso, Villanueva y San José del Pepino.",
  path: "/galeria",
});

export default function GaleriaPage() {
  return <Galeria />;
}