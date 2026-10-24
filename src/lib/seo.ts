import type { Metadata } from "next";

/**
 * Constantes SEO del sitio.
 * Dominio principal de producción (verificado en Vercel; los dominios
 * anteriores redirigen 307 preservando rutas).
 */
export const SITE_URL = "https://centro-educativo-rural-caliyaco.vercel.app";
export const SITE_NAME = "CER Caliyaco";

/**
 * Metadatos por página: título único, descripción específica y
 * canónica absoluta sobre el dominio principal. Las páginas usan
 * title.template heredado del layout raíz ("%s | CER Caliyaco").
 */
export function paginaMetadata(opts: {
  title: string;
  description: string;
  path: string;
  /** true evita el template "%s | CER Caliyaco" (usar en la home). */
  absolute?: boolean;
}): Metadata {
  const url = new URL(opts.path, SITE_URL).href;
  return {
    title: opts.absolute ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: "es_CO",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: opts.title,
      description: opts.description,
    },
  };
}
