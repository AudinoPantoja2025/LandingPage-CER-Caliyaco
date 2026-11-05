/**
 * Contenido editorial de las categorías «Cultura» y «Eventos» de la galería.
 *
 * Cada categoría reúne su colección real de fotografías y los textos que
 * alimentan su vista editorial. Las imágenes viven en `public/galeria/` y se
 * optimizaron a WebP (máx. 1280 px de ancho).
 */

import type { FotoSede } from "./galeria";

export type CategoriaContenidoSlug = "cultura" | "eventos";

export interface EventoContenido {
  /** Nombre del evento; se usa como título principal de la vista. */
  nombre: string;
  /** Rótulo breve sobre la fotografía destacada. */
  etiqueta: string;
  /** Párrafo introductorio del encabezado. */
  introduccion: string;
  /** `src` de la fotografía destacada dentro de `fotos`. */
  destacadaSrc: string;
  /** Valor de `object-position` de la fotografía destacada. */
  encuadreDestacada?: string;
  /** Párrafo de cierre con el contexto institucional del evento. */
  nota?: string;
}

export interface CategoriaContenido {
  slug: CategoriaContenidoSlug;
  titulo: string;
  descripcion: string;
  /** Colección real de la categoría. */
  fotos: FotoSede[];
  evento: EventoContenido;
}

export const CULTURA: CategoriaContenido = {
  slug: "cultura",
  titulo: "Cultura",
  descripcion:
    "Un espacio para expresar nuestra creatividad, compartir tradiciones y celebrar las experiencias culturales que enriquecen a nuestra comunidad educativa.",
  evento: {
    nombre: "Encuentro de expresiones culturales",
    etiqueta: "ENCUENTRO CULTURAL",
    introduccion:
      "Un espacio para compartir el talento, la creatividad y la expresión de nuestros estudiantes a través de la danza. Descubre algunos momentos de las presentaciones que dieron vida a este encuentro cultural.",
    destacadaSrc: "/galeria/cultura/09.webp",
    encuadreDestacada: "center",
  },
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
};

export const EVENTOS: CategoriaContenido = {
  slug: "eventos",
  titulo: "Eventos",
  descripcion:
    "Entregas, encuentros y momentos institucionales que mejoran las condiciones de nuestra comunidad educativa.",
  evento: {
    nombre: "Nuevo restaurante y cocina escolar",
    etiqueta: "OBRA INSTITUCIONAL",
    introduccion:
      "Gracias a la gestión de la Gobernación del Putumayo, el Centro Educativo Rural Caliyaco cuenta con un nuevo restaurante y cocina escolar: un espacio pensado para el bienestar de nuestras niñas, niños y jóvenes.",
    destacadaSrc: "/galeria/eventos/01.webp",
    encuadreDestacada: "center",
    nota:
      "Esta obra mejora las condiciones para la preparación y el servicio de los alimentos, y ofrece a la comunidad educativa un espacio digno, seguro y adecuado para la alimentación durante la jornada escolar. Agradecemos a la Gobernación del Putumayo por hacer posible este avance para la educación rural del departamento.",
  },
  fotos: [
    {
      src: "/galeria/eventos/01.webp",
      alt: "Vista aérea de la sede del CER Caliyaco con sus bloques de aulas y el nuevo restaurante escolar",
    },
    {
      src: "/galeria/eventos/02.webp",
      alt: "Vista aérea del nuevo restaurante y cocina escolar del CER Caliyaco",
    },
  ],
};
