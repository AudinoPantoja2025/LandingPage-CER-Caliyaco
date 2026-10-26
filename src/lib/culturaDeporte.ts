/**
 * Categorías de la vista «Cultura y deporte».
 *
 * Cultura ya cuenta con la colección real del «Encuentro de expresiones
 * culturales» (`fotos` + `evento`), que alimenta una vista editorial propia.
 * Deporte se mantiene sin fotografías a propósito: su detalle sigue mostrando
 * el estado vacío mientras no existan imágenes reales de actividades deportivas.
 */

import type { FotoSede } from "./galeria";

export type CategoriaCulturalSlug = "cultura" | "deporte";

/**
 * Evento con colección fotográfica propia.
 * `destacadaSrc` referencia un `src` de `fotos` en lugar de duplicar la foto,
 * de modo que la colección sigue teniendo una sola fuente de verdad.
 */
export interface EventoCultural {
  /** Nombre oficial del evento; se usa como título principal de la vista. */
  nombre: string;
  /** Rótulo breve sobre la fotografía destacada. */
  etiqueta: string;
  /** Párrafo introductorio del encabezado. */
  introduccion: string;
  /** `src` de la fotografía destacada dentro de `fotos`. */
  destacadaSrc: string;
  /** Valor de `object-position` de la fotografía destacada. */
  encuadreDestacada?: string;
}

export interface CategoriaCultural {
  slug: CategoriaCulturalSlug;
  titulo: string;
  descripcion: string;
  /** Texto de la acción visual, p. ej. «Explorar cultura». */
  accion: string;
  /** Icono disponible en la biblioteca local de la galería. */
  icono: CategoriaCulturalSlug;
  /** Colección real de la categoría. Vacío = estado vacío intencional. */
  fotos: FotoSede[];
  /** Presente solo en categorías con una vista editorial de evento. */
  evento?: EventoCultural;
  /** Fotografía real para la tarjeta de la portada «Cultura y deporte». */
  imagen?: { src: string; alt: string };
  /** Valor de `object-position` de la fotografía de la tarjeta. */
  encuadre?: string;
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
    evento: {
      nombre: "Encuentro de expresiones culturales",
      etiqueta: "ENCUENTRO CULTURAL",
      introduccion:
        "Un espacio para compartir el talento, la creatividad y la expresión de nuestros estudiantes a través de la danza. Descubre algunos momentos de las presentaciones que dieron vida a este encuentro cultural.",
      destacadaSrc: "/galeria/cultura/09.webp",
      encuadreDestacada: "center",
    },
    // Fotografía de la tarjeta en «Cultura y deporte». Diferente de la usada en
    // la portada de /galeria (07): el baile frente al telón queda centrado y
    // soporta bien el recorte de la tarjeta.
    imagen: {
      src: "/galeria/cultura/06.webp",
      alt: "Niños y niñas bailando frente al telón azul del encuentro cultural",
    },
    encuadre: "center",
    // El orden es el del recorrido visual: destacada, dos fotografías de
    // contexto y el mosaico del evento (también el orden del visor ampliado).
    fotos: [
      {
        src: "/galeria/cultura/09.webp",
        alt: "Grupo de estudiantes con vestidos rosados bailando en el patio del CER Caliyaco durante el encuentro cultural",
      },
      {
        src: "/galeria/cultura/04.webp",
        alt: "Estudiantes reunidos frente a la tarima decorada con el letrero «Encuentro de expresiones culturales»",
      },
      {
        src: "/galeria/cultura/06.webp",
        alt: "Niños y niñas bailando frente al telón azul del encuentro cultural",
      },
      {
        src: "/galeria/cultura/07.webp",
        alt: "Estudiantes con vestidos coloridos tomados de la mano frente al telón del encuentro cultural",
      },
      {
        src: "/galeria/cultura/05.webp",
        alt: "Estudiantes bailando con vestidos blancos y camisas amarillas durante el encuentro cultural",
      },
      {
        src: "/galeria/cultura/02.webp",
        alt: "Estudiantes con vestidos de colores bailando en el patio durante una presentación cultural",
      },
      {
        src: "/galeria/cultura/03.webp",
        alt: "Grupo de estudiantes con vestidos blancos y camisas amarillas en una presentación de danza",
      },
      {
        src: "/galeria/cultura/08.webp",
        alt: "Estudiantes con vestidos blancos y pañoletas rosadas formados durante la presentación",
      },
      {
        src: "/galeria/cultura/01.webp",
        alt: "Vista general del patio del CER Caliyaco durante el encuentro cultural, con el público alrededor de la tarima",
      },
    ],
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
