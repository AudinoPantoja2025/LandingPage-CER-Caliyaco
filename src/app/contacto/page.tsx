import type { Metadata } from "next";
import Contacto from "@/components/Contacto";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata({
  title: "Contacto",
  description:
    "Teléfono, correo, ubicación y canales de contacto del Centro Educativo Rural Caliyaco, vereda San José del Pepino, Mocoa, Putumayo.",
  path: "/contacto",
});

export default function ContactoPage() {
  return <Contacto />;
}