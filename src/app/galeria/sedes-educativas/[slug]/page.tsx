import { notFound } from "next/navigation";
import SedeGaleriaDetalle from "@/components/SedeGaleriaDetalle";
import { SEDES_GALERIA, esSlugValido } from "@/lib/galeria";

export const dynamicParams = false;

export function generateStaticParams() {
  return SEDES_GALERIA.map((sede) => ({ slug: sede.slug }));
}

interface SedePageProps {
  params: Promise<{ slug: string }>;
}

export default async function SedePage({ params }: SedePageProps) {
  const { slug } = await params;

  if (!esSlugValido(slug)) {
    notFound();
  }

  const sede = SEDES_GALERIA.find((item) => item.slug === slug);

  if (!sede) {
    notFound();
  }

  return <SedeGaleriaDetalle sede={sede} />;
}
