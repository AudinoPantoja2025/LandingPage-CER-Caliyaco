import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Sitemap dinámico. Lista solo las rutas públicas e indexables reales
 * del App Router (src/app). Sin endpoints API, rutas privadas ni
 * parámetros de consulta. Sin lastModified: no existe una fecha de
 * modificación fiable por página fuera del historial de Git.
 */
const RUTAS_PUBLICAS = [
  "/",
  "/nosotros",
  "/niveles-de-ensenanza",
  "/galeria",
  "/matriculas",
  "/convivencia",
  "/contacto",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return RUTAS_PUBLICAS.map((ruta) => ({
    url: new URL(ruta, SITE_URL).href,
  }));
}
