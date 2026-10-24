import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * robots.txt dinámico (Metadata API). El sitio es público: se permite
 * el rastreo completo sin bloquear rutas ni recursos. Referencia el
 * sitemap absoluto del dominio principal.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", SITE_URL).href,
    host: SITE_URL,
  };
}
