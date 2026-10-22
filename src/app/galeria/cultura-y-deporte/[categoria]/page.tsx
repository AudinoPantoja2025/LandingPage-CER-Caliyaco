import { notFound } from "next/navigation";
import CategoriaCulturaDeporte from "@/components/CategoriaCulturaDeporte";
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

  return <CategoriaCulturaDeporte categoria={datos} />;
}
