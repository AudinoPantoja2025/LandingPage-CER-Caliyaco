/**
 * Categorías de la vista «Cultura y deporte».
 *
 * El proyecto todavía no tiene fotografías de eventos culturales o deportivos.
 * `fotos` se deja vacío a propósito: el componente de detalle muestra el estado
 * vacío mientras no haya imágenes reales y, cuando se añadan aquí, renderiza la
 * galería sin cambiar la estructura de las páginas.
 */

import type { FotoSede } from "./galeria";

export type CategoriaCulturalSlug = "cultura" | "deporte";

export interface CategoriaCultural {
  slug: CategoriaCulturalSlug;
  titulo: string;
  descripcion: string;
  /** Texto de la acción visual, p. ej. «Explorar cultura». */
  accion: string;
  /** Icono disponible en la biblioteca local de la galería. */
  icono: CategoriaCulturalSlug;
  /** Vacío hasta que existan fotografías reales de la categoría. */
  fotos: FotoSede[];
  vacio: {
    titulo: string;
    descripcion: string;
  };
}

export const CATEGORIAS_CULTURA_DEPORTE: readonly CategoriaCultural[] = [
  {
    slug: "cultura",
    titulo: "Cultura",
    descripcion:
      "Un espacio para expresar nuestra creatividad, compartir tradiciones y celebrar las experiencias culturales que enriquecen a nuestra comunidad educativa.",
    accion: "Explorar cultura",
    icono: "cultura",
    fotos: [],
    vacio: {
      titulo: "Próximamente, nuestras historias culturales",
      descripcion:
        "Estamos preparando este espacio para compartir las experiencias, expresiones y encuentros culturales de nuestra comunidad educativa.",
    },
  },
  {
    slug: "deporte",
    titulo: "Deporte",
    descripcion:
      "Celebramos el movimiento, el trabajo en equipo y los valores que fortalecen la convivencia y el desarrollo integral de nuestros estudiantes.",
    accion: "Explorar deporte",
    icono: "deporte",
    fotos: [],
    vacio: {
      titulo: "Próximamente, nuestras experiencias deportivas",
      descripcion:
        "Estamos preparando este espacio para compartir las actividades, los encuentros y los momentos deportivos de nuestra comunidad educativa.",
    },
  },
];

export function esCategoriaCultural(
  slug: string
): slug is CategoriaCulturalSlug {
  return CATEGORIAS_CULTURA_DEPORTE.some((categoria) => categoria.slug === slug);
}
