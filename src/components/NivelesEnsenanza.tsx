import Link from "next/link";
import { NIVELES } from "@/lib/institucion";
import { NIVELES_OFERTA } from "@/lib/niveles";

/* ── Inline SVG icon helper ── */
function IconoBase({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ── Icons mapped to each teaching level ── */
const ICONOS_NIVELES: Record<string, React.ReactNode> = {
  Preescolar: (
    <IconoBase>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </IconoBase>
  ),
  "Básica primaria": (
    <IconoBase>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </IconoBase>
  ),
  "Básica secundaria": (
    <IconoBase>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
    </IconoBase>
  ),
};

/* ── Clock icon, used in the schedules section ── */
function IconoReloj() {
  return (
    <IconoBase>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </IconoBase>
  );
}

/* ── Sub-section heading ── */
function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl text-verde-oscuro font-bold mb-4 relative pb-3
        after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px]
        after:bg-amarillo after:rounded-full"
    >
      {children}
    </h2>
  );
}

/* ────────────────────────────────────────────────────────────── */

/**
 * Niveles de enseñanza del CER Caliyaco: oferta de grados por nivel
 * (`NIVELES_OFERTA`) y horarios de referencia (`NIVELES`).
 *
 * Componente de servidor: no usa estado ni efectos, solo datos estáticos.
 */
export default function NivelesEnsenanza() {
  return (
    <div id="niveles-de-ensenanza">
      {/* ── PAGE HEADER ── */}
      <section
        aria-labelledby="niveles-titulo"
        className="py-20 px-6 bg-verde-oscuro text-white"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <h1
            id="niveles-titulo"
            className="text-3xl md:text-5xl font-bold leading-tight mb-4 mt-8"
          >
            Nuestros niveles de enseñanza
          </h1>
          <p className="text-white/80 text-lg font-medium mb-8">
            Una educación para cada etapa de aprendizaje.
          </p>
          <p className="text-white/75 leading-relaxed max-w-[720px]">
            En el Centro Educativo Rural Caliyaco acompañamos el proceso formativo
            de nuestros estudiantes mediante una propuesta educativa orientada al
            desarrollo integral, la sana convivencia y el respeto por el medio
            ambiente.
          </p>
          <p className="text-white/75 leading-relaxed max-w-[720px] mt-4">
            Conoce nuestros niveles de enseñanza y consulta con la institución los
            grados disponibles en cada sede.
          </p>
        </div>
      </section>

      {/* ── LEVEL CARDS ── */}
      <section aria-labelledby="titulo-niveles" className="py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto w-full">
          <SectionHeading id="titulo-niveles">Oferta por nivel</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {NIVELES_OFERTA.map((nivel) => (
              <article
                key={nivel.nombre}
                className="rounded-xl border border-black/10 bg-gray-50 p-6
                  transition-[transform,box-shadow] duration-300
                  hover:-translate-y-1 hover:shadow-md
                  motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-verde/10 text-verde-oscuro mb-4">
                  {ICONOS_NIVELES[nivel.nombre]}
                </span>
                <h3 className="text-xl font-semibold text-verde-oscuro mb-3">
                  {nivel.nombre}
                </h3>
                <p className="text-sm text-texto-suave leading-relaxed mb-4">
                  {nivel.descripcion}
                </p>
                <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                  {nivel.grados.map((grado) => (
                    <li
                      key={grado}
                      className="px-3 py-1 text-xs font-semibold rounded-full
                        bg-verde/10 text-verde-oscuro
                        motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      {grado}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERENCE SCHEDULES ── */}
      <section
        aria-labelledby="horarios-titulo"
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="flex items-start gap-4">
            <span className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-verde/10 text-verde-oscuro shrink-0">
              <IconoReloj />
            </span>
            <div className="flex-1">
              <SectionHeading id="horarios-titulo">
                Horarios de referencia
              </SectionHeading>
              <p className="text-texto-suave leading-relaxed max-w-[720px]">
                Horarios de referencia de cada nivel de enseñanza. Confirma con la
                institución la jornada y el horario vigentes de la sede de tu interés
                antes de iniciar el proceso de matrícula.
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <caption className="sr-only">
                Horarios de referencia por nivel de enseñanza
              </caption>
              <thead>
                <tr className="border-b border-black/10">
                  <th scope="col" className="py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-verde">
                    Nivel
                  </th>
                  <th scope="col" className="py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-verde">
                    Jornada
                  </th>
                  <th scope="col" className="py-3 text-xs font-semibold uppercase tracking-wider text-verde">
                    Horario
                  </th>
                </tr>
              </thead>
              <tbody>
                {NIVELES.map((nivel) => (
                  <tr key={nivel.nombre} className="border-b border-black/5 last:border-b-0">
                    <th
                      scope="row"
                      className="py-4 pr-4 text-sm font-semibold text-verde-oscuro align-top"
                    >
                      {nivel.nombre}
                    </th>
                    <td className="py-4 pr-4 text-sm text-texto-suave align-top">
                      {nivel.jornada}
                    </td>
                    <td className="py-4 text-sm font-medium text-texto align-top tabular-nums">
                      {nivel.horario}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-texto-suave leading-relaxed max-w-[720px]">
            La jornada y el horario pueden variar según la sede.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="niveles-cta-titulo"
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-[1100px] mx-auto w-full">
          <h2 id="niveles-cta-titulo" className="sr-only">
            Contacto e inscripción
          </h2>
          <Link
            href="/contacto"
            className="inline-block px-8 py-3 font-semibold text-base no-underline
              bg-verde text-white rounded-full transition-transform duration-300
              hover:-translate-y-[3px] hover:shadow-lg
              focus-visible:outline-2 focus-visible:outline-verde-oscuro
              motion-reduce:transform-none motion-reduce:transition-none"
          >
            Ver información de contacto
          </Link>
        </div>
      </section>
    </div>
  );
}