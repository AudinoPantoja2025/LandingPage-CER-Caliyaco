/**
 * Galería fotográfica por sedes del CER Caliyaco.
 * Fotografías optimizadas en WebP (public/galeria/<slug>/NN.webp).
 *
 * Para agregar fotos: convierte la imagen a WebP (máx. 1280 px de ancho),
 * guárdala con el siguiente consecutivo (p. ej. 11.webp) y aumenta el
 * `total` de la sede correspondiente. Aparecerá automáticamente.
 */

export interface FotoSede {
  src: string;
  alt: string;
}

export interface SedeGaleria {
  slug: string;
  nombre: string;
  fotos: FotoSede[];
}

/**
 * Fotografía de portada de una sede y su encuadre.
 * Se indexa por el nombre oficial de `SEDES` (lib/institucion.ts), no por slug,
 * para que Líbano y Villa Rosa —que comparten carpeta— tengan portadas distintas.
 */
export interface PortadaSede {
  src: string;
  alt: string;
  /** Valor de `object-position` aplicado a la fotografía. */
  encuadre: string;
}

function fotosDe(slug: string, nombreSede: string, total: number): FotoSede[] {
  return Array.from({ length: total }, (_, i) => {
    const nn = String(i + 1).padStart(2, "0");
    return {
      src: `/galeria/${slug}/${nn}.webp`,
      alt: `${nombreSede} del CER Caliyaco – foto ${i + 1}`,
    };
  });
}

export const SEDES_GALERIA: SedeGaleria[] = [
  {
    slug: "caliyaco",
    nombre: "Sede Caliyaco",
    fotos: fotosDe("caliyaco", "Sede Caliyaco", 2),
  },
  {
    slug: "san-luis-de-chontayaco",
    nombre: "San Luis de Chontayaco",
    fotos: fotosDe("san-luis-de-chontayaco", "Sede San Luis de Chontayaco", 6),
  },
  {
    slug: "guaduales",
    nombre: "Sede Guaduales",
    fotos: fotosDe("guaduales", "Sede Guaduales", 7),
  },
  {
    slug: "libano-villa-rosa",
    nombre: "Líbano y Villa Rosa",
    fotos: fotosDe("libano-villa-rosa", "Sede Líbano Villa Rosa", 7),
  },
  {
    slug: "paraiso",
    nombre: "Sede Paraíso",
    fotos: fotosDe("paraiso", "Sede Paraíso", 6),
  },
  {
    slug: "san-jose-del-pepino",
    nombre: "San José del Pepino",
    fotos: fotosDe("san-jose-del-pepino", "Sede San José del Pepino", 10),
  },
  {
    slug: "villanueva",
    nombre: "Sede Villanueva",
    fotos: fotosDe("villanueva", "Sede Villanueva", 7),
  },
];

export const TOTAL_FOTOS = SEDES_GALERIA.reduce(
  (acc, sede) => acc + sede.fotos.length,
  0
);

/* ────────────────────────────────────────────────────────────────
 * Portadas de las sedes para la vista «Sedes educativas».
 * Debe existir una entrada por cada nombre de `SEDES`
 * (lib/institucion.ts). Las imágenes son las reales del proyecto.
 * ──────────────────────────────────────────────────────────────── */

export const PORTADAS_SEDE: Record<string, PortadaSede> = {
  Caliyaco: {
    src: "/galeria/caliyaco/01.webp",
    alt: "Fachada de la sede Caliyaco, con el bloque de aulas blanco y verde y el patio central",
    encuadre: "center",
  },
  "San Luis de Chontayaco": {
    src: "/galeria/san-luis-de-chontayaco/02.webp",
    alt: "Fachada de la sede San Luis de Chontayaco con las montañas al fondo",
    encuadre: "center",
  },
  "Villa Rosa": {
    src: "/galeria/libano-villa-rosa/04.webp",
    alt: "Mural costumbrista pintado en la fachada de una sede del CER Caliyaco",
    encuadre: "center",
  },
  "Líbano": {
    src: "/galeria/libano-villa-rosa/05.webp",
    alt: "Fachada blanca con un mural de árbol en una sede del CER Caliyaco",
    encuadre: "center",
  },
  "Paraíso": {
    src: "/galeria/paraiso/03.webp",
    alt: "Bloque de aulas azul y amarillo de la sede Paraíso junto a la cancha, con cielo despejado",
    encuadre: "center",
  },
  Villanueva: {
    src: "/galeria/villanueva/02.webp",
    alt: "Entrada arbolada de la sede Villanueva con el edificio al fondo",
    encuadre: "center 60%",
  },
  Guaduales: {
    src: "/galeria/guaduales/01.webp",
    alt: "Fachada de la sede Guaduales con cubierta metálica y el patio al frente",
    encuadre: "center",
  },
  "San José del Pepino": {
    src: "/galeria/san-jose-del-pepino/09.webp",
    alt: "Frontis de la sede San José del Pepino con el mural del escudo institucional del CER Caliyaco",
    encuadre: "center 55%",
  },
};

/** Sede que ocupa la tarjeta destacada de la vista «Sedes educativas». */
export const SEDE_DESTACADA = "San José del Pepino";

/** Slugs cuyo grupo fotográfico representa a más de una sede institucional. */
export const SLUGS_COLECCION_COMPARTIDA = new Set(["libano-villa-rosa"]);

/** Navegación entre las dos categorías principales de la galería. */
export const CATEGORIAS_NAVEGACION_GALERIA = [
  {
    id: "sedes",
    label: "Sedes educativas",
    href: "/galeria/sedes-educativas",
  },
  {
    id: "cultura-deporte",
    label: "Cultura y deporte",
    href: "/galeria/cultura-y-deporte",
  },
] as const;

/* ────────────────────────────────────────────────────────────────
 * Portada de la galería: las dos categorías principales.
 *
 * Los textos y las rutas de imagen se centralizan aquí para que su
 * actualización manual (sobre todo la fotografía de "Cultura y deporte",
 * que es provisional) se haga en un solo sitio.
 * ──────────────────────────────────────────────────────────────── */

export interface CategoriaGaleria {
  /** Identificador visual de apoyo, p. ej. «01 · SEDES EDUCATIVAS». */
  identificador: string;
  titulo: string;
  descripcion: string;
  /** Ruta interna de la vista de la categoría. */
  href: string;
  imagen: {
    src: string;
    /** Texto alternativo descriptivo (no debe repetir el título). */
    alt: string;
  };
  /**
   * Encuadre de la fotografía dentro de la tarjeta (`object-position`).
   * Se ajusta según dónde esté el sujeto interesante de cada imagen.
   */
  encuadre: string;
}

export const CATEGORIAS_GALERIA: CategoriaGaleria[] = [
  {
    identificador: "01 · SEDES EDUCATIVAS",
    titulo: "Sedes educativas",
    descripcion:
      "Conoce nuestros espacios, las sedes que acompañan nuestra labor educativa y el entorno donde aprendemos cada día.",
    href: "/galeria/sedes-educativas",
    imagen: {
      // Sede San José del Pepino: frontis con el mural y el escudo
      // institucional, la fotografía más identificable de la sede.
      src: "/galeria/san-jose-del-pepino/09.webp",
      alt: "Frontis de la sede San José del Pepino con el mural y el escudo del Centro Educativo Rural Caliyaco pintados en la fachada",
    },
    encuadre: "68% center",
  },
  {
    identificador: "02 · CULTURA Y DEPORTE",
    titulo: "Cultura y deporte",
    descripcion:
      "Celebramos las expresiones culturales, las actividades deportivas y los encuentros que fortalecen los lazos de nuestra comunidad.",
    href: "/galeria/cultura-y-deporte",
    imagen: {
      // PROVISIONAL: el proyecto todavía no tiene fotografías de eventos
      // culturales o deportivos. Este mural costumbrista es la imagen
      // disponible que mejor evoca la categoría. Reemplázala (src y alt)
      // cuando existan fotos propias de las actividades.
      src: "/galeria/libano-villa-rosa/04.webp",
      alt: "Mural pintado en el muro de una sede del Centro Educativo Rural Caliyaco con escenas costumbristas y de la comunidad",
    },
    encuadre: "88% center",
  },
];

/**
 * Nombres oficiales de sedes (lib/institucion.ts) hacia el slug de galería.
 * Villa Rosa y Líbano comparten grupo fotográfico.
 */
const SLUG_POR_SEDE: Record<string, string> = {
  Caliyaco: "caliyaco",
  "San Luis de Chontayaco": "san-luis-de-chontayaco",
  "Villa Rosa": "libano-villa-rosa",
  "Líbano": "libano-villa-rosa",
  "Paraíso": "paraiso",
  Villanueva: "villanueva",
  Guaduales: "guaduales",
  "San José del Pepino": "san-jose-del-pepino",
};

export function slugDeSede(nombre: string): string | null {
  return SLUG_POR_SEDE[nombre] ?? null;
}

export function esSlugValido(slug: string | null): slug is string {
  return slug !== null && SEDES_GALERIA.some((sede) => sede.slug === slug);
}
