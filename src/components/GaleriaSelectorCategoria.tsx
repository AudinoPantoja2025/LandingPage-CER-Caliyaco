import Link from "next/link";
import { CATEGORIAS_NAVEGACION_GALERIA } from "@/lib/galeria";

interface GaleriaSelectorCategoriaProps {
  /** Categoría que corresponde a la página actual. */
  activa: "sedes" | "cultura-deporte";
}

/**
 * Selector compacto entre las dos categorías principales de la galería.
 * La opción activa se marca visualmente y con `aria-current="page"`.
 */
export default function GaleriaSelectorCategoria({
  activa,
}: GaleriaSelectorCategoriaProps) {
  return (
    <nav aria-label="Categorías de la galería" className="w-full sm:w-auto">
      <ul className="m-0 flex w-full list-none items-center gap-1 rounded-full border border-black/10 bg-gray-50 p-1 sm:w-auto">
        {CATEGORIAS_NAVEGACION_GALERIA.map((categoria) => {
          const esActiva = categoria.id === activa;

          return (
            <li key={categoria.id} className="flex-1 sm:flex-none">
              <Link
                href={categoria.href}
                aria-current={esActiva ? "page" : undefined}
                className={`flex items-center justify-center rounded-full px-4 py-2 text-[0.8rem] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde sm:text-sm ${
                  esActiva
                    ? "bg-verde text-white shadow-sm"
                    : "text-texto-suave hover:bg-white hover:text-verde-oscuro"
                }`}
              >
                {categoria.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
