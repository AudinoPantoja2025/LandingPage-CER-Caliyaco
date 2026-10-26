import { notFound } from "next/navigation";
import CategoriaCulturaDeporte from "@/components/CategoriaCulturaDeporte";
import CulturaEncuentro from "@/components/CulturaEncuentro";
import {
  CATEGORIAS_CULTURA_DEPORTE,
  esCategoriaCultural,
} from "@/lib/culturaDeporte";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIAS_CULTURA_DEPORTE.map((categoria) => ({
    categoria: categoria.slug,
  }));
}

interface CategoriaPageProps {
  params: Promise<{ categoria: string }>;
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { categoria } = await params;

  if (!esCategoriaCultural(categoria)) {
    notFound();
  }

  const datos = CATEGORIAS_CULTURA_DEPORTE.find(
    (item) => item.slug === categoria
  );

  if (!datos) {
    notFound();
  }

  // Cultura cuenta con una colección fotográfica real y una vista editorial
  // propia. Deporte conserva el detalle genérico y su estado vacío.
  if (datos.slug === "cultura" && datos.evento) {
    return <CulturaEncuentro categoria={datos} evento={datos.evento} />;
  }

  return <CategoriaCulturaDeporte categoria={datos} />;
}
