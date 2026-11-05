import type { Metadata } from "next";
import EventosGaleria from "@/components/EventosGaleria";
import { EVENTOS } from "@/lib/culturaEventos";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata({
  title: "Eventos",
  description:
    "Nuevo restaurante y cocina escolar del Centro Educativo Rural Caliyaco, gracias a la gestión de la Gobernación del Putumayo.",
  path: "/galeria/eventos",
});

export default function EventosPage() {
  return <EventosGaleria categoria={EVENTOS} evento={EVENTOS.evento} />;
}
