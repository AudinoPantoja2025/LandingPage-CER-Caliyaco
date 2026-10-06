import Link from "next/link";
import { CONTACTO, IDENTIFICACION } from "@/lib/institucion";

/* ── Datos de contacto derivados de la fuente institucional ──
 */
const TELEFONO_E164 = `+57${CONTACTO.telefono}`;
const TELEFONO_LEIBLE = CONTACTO.telefono.replace(
  /(\d{3})(\d{3})(\d{4})/,
  "$1 $2 $3",
);
const CORREO = CONTACTO.correo;
const VEREDA_SEDE_PRINCIPAL = CONTACTO.direccion.split(",")[0].trim();
const CIUDAD = IDENTIFICACION.ubicacion;

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

const IconoTelefono = (
  <IconoBase>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </IconoBase>
);

const IconoCorreo = (
  <IconoBase>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconoBase>
);

const IconoUbicacion = (
  <IconoBase>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </IconoBase>
);

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

/**
 * Etiqueta de canal. Sobre superficies oscuras se usa blanco sólido: la jerarquía
 * la dan el tamaño y el peso, no la opacidad, porque bajar la opacidad del blanco
 * sobre verde no alcanza el contraste mínimo de 4.5:1.
 */
function Etiqueta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${className}`}
    >
      {children}
    </span>
  );
}

/* ────────────────────────────────────────────────────────────── */

/**
 * Página de contacto del CER Caliyaco.
 */
export default function Contacto() {
  return (
    <div id="contacto" className="contacto-scope">
      {/* Text selection themed from the institutional palette, scoped to this page */}
      <style>{`
        .contacto-scope ::selection {
          background-color: var(--color-verde);
          color: #fff;
        }
      `}</style>

      {/* ── PAGE HEADER ── */}
      <section
        aria-labelledby="contacto-titulo"
        className="py-20 px-6 bg-verde-oscuro text-white"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <h1
            id="contacto-titulo"
            className="text-3xl md:text-5xl font-bold leading-tight mb-4 mt-8 text-balance"
          >
            Estamos aquí para orientarte
          </h1>
          <p className="text-white/80 text-lg font-medium max-w-[720px] leading-relaxed mb-6">
            ¿Tienes preguntas sobre nuestra oferta educativa, las sedes o el proceso de
            matrícula?
          </p>
          <p className="text-white/75 leading-relaxed max-w-[720px]">
            Comunícate con el Centro Educativo Rural Caliyaco a través de nuestros
            canales institucionales.
          </p>
        </div>
      </section>

      {/* ── SHARED CHANNELS ── */}
      <section aria-labelledby="canales-titulo" className="py-16 px-6 bg-white">
        <div className="max-w-[900px] mx-auto w-full">
          <SectionHeading id="canales-titulo">Canales de atención</SectionHeading>
          <p className="text-texto-suave leading-relaxed max-w-[70ch] mb-10">
            La institución cuenta con los siguientes canales de atención. Elige el
            que prefieras y te orientaremos sobre la oferta educativa, la sede
            principal y el proceso de matrícula.
          </p>

          {/* Dominant channel: teléfono, full-width horizontal band */}
          <a
            href={`tel:${TELEFONO_E164}`}
            className="group flex flex-col sm:flex-row sm:items-center gap-6 rounded-2xl
              bg-verde p-7 sm:p-8 text-white no-underline
              shadow-[0_4px_16px_rgba(0,0,0,0.18)]
              transition-[transform,box-shadow,background-color] duration-300 ease-out
              hover:-translate-y-[3px] hover:bg-verde-oscuro hover:shadow-[0_10px_28px_rgba(0,0,0,0.24)]
              focus-visible:outline-2 focus-visible:outline-verde-oscuro focus-visible:outline-offset-4
              motion-reduce:transform-none motion-reduce:transition-none"
          >
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white/15 shrink-0"
            >
              {IconoTelefono}
            </span>
            <div className="flex-1 min-w-0">
              <Etiqueta className="text-white">Teléfono</Etiqueta>
              <span className="block text-4xl md:text-5xl font-bold tracking-tight tabular-nums mt-2">
                {TELEFONO_LEIBLE}
              </span>
              <p className="text-sm mt-3 max-w-[52ch] leading-relaxed">
                Llámanos para consultar la oferta educativa, los grados disponibles
                y el proceso de matrícula.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 shrink-0 text-sm font-semibold">
              Llamar ahora
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 ease-out
                  group-hover:translate-x-1 motion-reduce:transform-none"
              >
                →
              </span>
            </span>
          </a>

          {/* Secondary channels: correo y sede principal */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <a
              href={`mailto:${CORREO}`}
              className="group flex flex-col rounded-2xl border border-black/10 bg-gray-50 p-6
                text-texto no-underline
                transition-[transform,box-shadow] duration-300 ease-out
                hover:-translate-y-[3px] hover:shadow-md
                focus-visible:outline-2 focus-visible:outline-verde-oscuro focus-visible:outline-offset-4
                motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-verde/10 text-verde-oscuro mb-4">
                {IconoCorreo}
              </span>
              <Etiqueta className="text-verde">Correo electrónico</Etiqueta>
              <span className="font-semibold text-verde-oscuro mt-2 break-words">
                {CORREO}
              </span>
              <p className="text-sm text-texto-suave mt-2 leading-relaxed">
                Envíanos tu consulta por correo y te responderemos a la mayor
                brevedad.
              </p>
            </a>

            <div className="flex flex-col rounded-2xl border border-black/10 bg-gray-50 p-6">
              <span className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-verde/10 text-verde-oscuro mb-4">
                {IconoUbicacion}
              </span>
              <Etiqueta className="text-verde">Sede principal</Etiqueta>
              <span className="font-semibold text-verde-oscuro mt-2">
                {VEREDA_SEDE_PRINCIPAL}
              </span>
              <p className="text-sm text-texto-suave mt-2 leading-relaxed">
                En {CIUDAD}. Atendemos a la comunidad en esta sede.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="contacto-cta-titulo"
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <h2 id="contacto-cta-titulo" className="sr-only">
            Accesos directos de contacto
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={`tel:${TELEFONO_E164}`}
              className="inline-block px-6 py-3 text-center font-semibold text-base no-underline
                bg-verde text-white rounded-full
                transition-[transform,box-shadow] duration-300 ease-out
                hover:-translate-y-[3px] hover:shadow-lg
                focus-visible:outline-2 focus-visible:outline-verde-oscuro
                motion-reduce:transform-none motion-reduce:transition-none"
            >
              Llamar a la institución
            </a>
            <a
              href={`mailto:${CORREO}`}
              className="inline-block px-6 py-3 text-center font-semibold text-base no-underline
                bg-white text-verde-oscuro border-2 border-verde rounded-full
                transition-colors duration-300 ease-out
                hover:bg-verde hover:text-white
                focus-visible:outline-2 focus-visible:outline-verde-oscuro
                motion-reduce:transition-none"
            >
              Enviar correo
            </a>
            <Link
              href="/matriculas"
              className="inline-block px-6 py-3 text-center font-semibold text-base no-underline
                bg-white text-verde-oscuro border-2 border-verde rounded-full
                transition-colors duration-300 ease-out
                hover:bg-verde hover:text-white
                focus-visible:outline-2 focus-visible:outline-verde-oscuro
                motion-reduce:transition-none"
            >
              Consultar matrículas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}