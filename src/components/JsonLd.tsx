import { CONTACTO, IDENTIFICACION } from "@/lib/institucion";
import { SITE_URL } from "@/lib/seo";

/**
 * Datos estructurados JSON-LD (Schema.org) renderizados en el layout
 * raízo. Entidad única: EducationalOrganization + WebSite enlazados
 * por @id. Solo datos oficiales del Manual de Convivencia; sin
 * coordenadas, valoraciones ni horarios inventados.
 */
export default function JsonLd() {
  const organizacion = {
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organizacion`,
    name: IDENTIFICACION.nombre,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/logo.png`,
    slogan: IDENTIFICACION.lema,
    inLanguage: "es-CO",
    telephone: `+57${CONTACTO.telefono}`,
    email: CONTACTO.correo,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vereda San José del Pepino",
      addressLocality: "Mocoa",
      addressRegion: "Putumayo",
      addressCountry: "CO",
    },
  };

  const datos = {
    "@context": "https://schema.org",
    "@graph": [
      organizacion,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#sitio`,
        url: `${SITE_URL}/`,
        name: IDENTIFICACION.nombre,
        inLanguage: "es-CO",
        publisher: { "@id": `${SITE_URL}/#organizacion` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(datos).replace(/</g, "\\u003c"),
      }}
    />
  );
}
