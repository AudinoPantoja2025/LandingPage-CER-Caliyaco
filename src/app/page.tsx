import Hero from "@/components/Hero";
import CifrasInstitucionales from "@/components/CifrasInstitucionales";
import ValoresInstitucionales from "@/components/ValoresInstitucionales";
import MisionVision from "@/components/MisionVision";
import ProgramasDestacados from "@/components/ProgramasDestacados";
import GaleriaPreview from "@/components/GaleriaPreview";
import BannerMatriculas from "@/components/BannerMatriculas";
import Anuncios from "@/components/Anuncios";
import UbicacionContacto from "@/components/UbicacionContacto";

export default function Home() {
  return (
    <>
      <Hero />
      <CifrasInstitucionales />
      <ValoresInstitucionales />
      <MisionVision />
      <ProgramasDestacados />
      <GaleriaPreview />
      <BannerMatriculas />
      <Anuncios />
      <UbicacionContacto />
    </>
  );
}
