import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CifrasInstitucionales from "@/components/CifrasInstitucionales";
import MisionVision from "@/components/MisionVision";
import ProgramasDestacados from "@/components/ProgramasDestacados";
import GaleriaPreview from "@/components/GaleriaPreview";
import BannerMatriculas from "@/components/BannerMatriculas";
import Anuncios from "@/components/Anuncios";
import UbicacionContacto from "@/components/UbicacionContacto";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata({
  title: "CER Caliyaco | Centro Educativo Rural en Mocoa, Putumayo",
  description:
    "Institución educativa pública rural en Mocoa, Putumayo. 8 sedes, preescolar, básica primaria y secundaria con énfasis en Ciencias Naturales. Conoce el CER Caliyaco.",
  path: "/",
  absolute: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <CifrasInstitucionales />
      <MisionVision />
      <ProgramasDestacados />
      <GaleriaPreview />
      <BannerMatriculas />
      <Anuncios />
      <UbicacionContacto />
    </>
  );
}
