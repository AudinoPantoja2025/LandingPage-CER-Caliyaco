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
