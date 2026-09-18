import Link from "next/link";

/**
 * Anuncios y comunicados. Los avisos se gestionan en el arreglo ANUNCIOS:
 * agrega circulares, fechas de reuniones y eventos con título, fecha y
 * detalle. El primero (matrículas) es el aviso vigente del sitio.
 */
interface Anuncio {
  titulo: string;
  fecha: string;
  detalle: string;
  enlace?: { texto: string; href: string };
}

const ANUNCIOS: Anuncio[] = [
  {
    titulo: "Inscripciones abiertas",
    fecha: "Calendario A",
    detalle:
      "Matrículas abiertas para Preescolar, Básica Primaria y Básica Secundaria en las 8 sedes del centro educativo.",
    enlace: { texto: "Cómo matricularse", href: "/matriculas" },
  },
  // Agrega aquí nuevos anuncios con el mismo formato:
  // {
  //   titulo: "Reunión de padres de familia",
  //   fecha: "Por definir",
  //   detalle: "Descripción del evento o circular.",
  // },
];

export default function Anuncios() {
  return (
    <section
      id="anuncios"
      aria-labelledby="titulo-anuncios"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <h2
          id="titulo-anuncios"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Anuncios
        </h2>
        <p className="text-texto-suave max-w-[700px] mb-10">
          Comunicados y fechas importantes para la comunidad educativa.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none m-0 p-0">
          {ANUNCIOS.map((anuncio) => (
            <li
              key={anuncio.titulo}
              className="rounded-xl border border-black/10 bg-gray-50 p-6
                border-l-4 border-l-verde"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-verde mb-2">
                {anuncio.fecha}
              </p>
              <h3 className="text-lg font-semibold text-verde-oscuro mb-2">
                {anuncio.titulo}
              </h3>
              <p className="text-sm text-texto-suave leading-relaxed mb-3">
                {anuncio.detalle}
              </p>
              {anuncio.enlace && (
                <Link
                  href={anuncio.enlace.href}
                  className="text-sm text-verde font-semibold underline underline-offset-4
                    hover:text-verde-oscuro transition-colors
                    focus-visible:outline-2 focus-visible:outline-verde rounded-sm"
                >
                  {anuncio.enlace.texto}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
