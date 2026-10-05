import Image from "next/image";
import Link from "next/link";
import { bandera, logo } from "@/lib/brand";
import {
  IDENTIFICACION,
  MISION,
  VISION,
  FILOSOFIA,
  VALORES_INSTITUCIONALES,
  SEDES,
} from "@/lib/institucion";

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

/** Icons mapped to each of the 8 official values */
const ICONOS_VALORES: Record<string, React.ReactNode> = {
  Respeto: (
    <IconoBase>
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </IconoBase>
  ),
  Tolerancia: (
    <IconoBase>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconoBase>
  ),
  Responsabilidad: (
    <IconoBase>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </IconoBase>
  ),
  Honradez: (
    <IconoBase>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </IconoBase>
  ),
  "Sentido de pertenencia": (
    <IconoBase>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </IconoBase>
  ),
  Autoestima: (
    <IconoBase>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </IconoBase>
  ),
  Amor: (
    <IconoBase>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </IconoBase>
  ),
  Humildad: (
    <IconoBase>
      <path d="M12 22v-7" />
      <path d="M12 15C12 9 8 5 3 5c0 5 4 9 9 10z" />
      <path d="M12 15c0-6 4-10 9-10 0 5-4 9-9 10z" />
    </IconoBase>
  ),
};

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

/* ── Data items for the institutional identification block ── */
const DATOS_IDENTIFICACION = [
  { etiqueta: "Nombre", valor: IDENTIFICACION.nombre },
  { etiqueta: "Ubicación", valor: IDENTIFICACION.ubicacion },
  { etiqueta: "Naturaleza", valor: IDENTIFICACION.naturaleza },
  { etiqueta: "Carácter", valor: IDENTIFICACION.caracter },
  { etiqueta: "Énfasis", valor: IDENTIFICACION.enfasis },
  { etiqueta: "Creación", valor: IDENTIFICACION.creacion },
  { etiqueta: "Lema", valor: IDENTIFICACION.lema },
];

/* ────────────────────────────────────────────────────────────── */

export default function Nosotros() {
  return (
    <main id="nosotros">
      {/* ── PAGE HEADER ── */}
      <section
        aria-labelledby="nosotros-titulo"
        className="py-20 px-6 bg-verde-oscuro text-white"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <h1
            id="nosotros-titulo"
            className="text-3xl md:text-5xl font-bold leading-tight mb-4 mt-8"
          >
            Conoce el Centro Educativo Rural Caliyaco
          </h1>
          <p className="text-white/80 text-lg font-medium mb-8">
            Naturaleza, ciencia y progreso.
          </p>
          <p className="text-white/75 leading-relaxed max-w-[720px]">
            El Centro Educativo Rural Caliyaco es una institución educativa pública de
            carácter mixto, ubicada en Mocoa, Putumayo. Nuestra labor educativa está
            orientada a la formación integral de niños, niñas, adolescentes y jóvenes,
            promoviendo el conocimiento, la sana convivencia, la inclusión y el respeto
            por el entorno natural.
          </p>
          <p className="text-white/75 leading-relaxed max-w-[720px] mt-4">
            Nos identificamos con una educación que busca formar personas responsables,
            autónomas, solidarias y comprometidas con su comunidad, bajo el lema
            institucional «Naturaleza, ciencia y progreso».
          </p>
        </div>
      </section>

      {/* ── INSTITUTIONAL DATA ── */}
      <section
        aria-labelledby="datos-institucionales-titulo"
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <SectionHeading id="datos-institucionales-titulo">
            Datos institucionales
          </SectionHeading>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0 mt-8">
            {DATOS_IDENTIFICACION.map((dato) => (
              <li
                key={dato.etiqueta}
                className="bg-gray-50 rounded-xl border border-black/5 px-5 py-4"
              >
                <span className="block text-xs font-semibold uppercase tracking-wider text-verde mb-1">
                  {dato.etiqueta}
                </span>
                <span className="text-texto font-medium">{dato.valor}</span>
              </li>
            ))}
            {/* DANE code in secondary prominence */}
            <li className="bg-gray-50 rounded-xl border border-black/5 px-5 py-4 sm:col-span-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-texto-suave mb-1">
                Código DANE
              </span>
              <span className="text-texto-suave font-medium font-mono">
                {IDENTIFICACION.codigoDANE}
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section
        aria-labelledby="filosofia-titulo"
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <SectionHeading id="filosofia-titulo">Nuestra filosofía</SectionHeading>
          <p className="text-texto-suave leading-relaxed max-w-[720px]">{FILOSOFIA}</p>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section
        aria-labelledby="mision-vision-titulo"
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <h2
            id="mision-vision-titulo"
            className="sr-only"
          >
            Misión y Visión
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <article aria-labelledby="mision-titulo">
              <SectionHeading id="mision-titulo">Nuestra misión</SectionHeading>
              <p className="text-texto-suave leading-relaxed">{MISION}</p>
            </article>
            <article aria-labelledby="vision-titulo">
              <SectionHeading id="vision-titulo">Nuestra visión</SectionHeading>
              <p className="text-texto-suave leading-relaxed">{VISION}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        aria-labelledby="valores-titulo"
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-[1100px] mx-auto w-full">
          <SectionHeading id="valores-titulo">Los valores que nos representan</SectionHeading>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 list-none m-0 p-0 mt-8">
            {VALORES_INSTITUCIONALES.map((valor) => (
              <li
                key={valor.nombre}
                className="bg-white rounded-xl border border-black/5 p-6
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-md
                  hover:border-verde/30"
              >
                <span
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full
                    bg-verde/10 text-verde-oscuro mb-4"
                >
                  {ICONOS_VALORES[valor.nombre]}
                </span>
                <h3 className="text-base font-semibold text-verde-oscuro mb-2">
                  {valor.nombre}
                </h3>
                <p className="text-sm text-texto-suave leading-relaxed">
                  {valor.descripcion}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── EDUCATIONAL PROPOSAL ── */}
      <section
        aria-labelledby="propuesta-titulo"
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <SectionHeading id="propuesta-titulo">Nuestra propuesta educativa</SectionHeading>
          <div className="grid gap-8 md:grid-cols-2 mt-8">
            <article className="bg-gray-50 rounded-xl border border-black/5 p-6">
              <h3 className="text-lg font-semibold text-verde-oscuro mb-3">
                Aprender en el contexto rural
              </h3>
              <p className="text-texto-suave leading-relaxed text-sm">
                El manual de convivencia identifica el modelo Escuela Nueva como parte
                de la propuesta educativa del Centro Educativo Rural Caliyaco. Esta
                orientación se articula con una formación integral y con la importancia
                del aprendizaje en el contexto de la comunidad rural.
              </p>
            </article>
            <article className="bg-gray-50 rounded-xl border border-black/5 p-6">
              <h3 className="text-lg font-semibold text-verde-oscuro mb-3">
                Ciencias Naturales y Educación Ambiental
              </h3>
              <p className="text-texto-suave leading-relaxed text-sm">
                El cuidado de la naturaleza forma parte de la identidad institucional.
                Promovemos la valoración y conservación de los recursos naturales y el
                compromiso con un entorno equilibrado y sostenible.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── SYMBOLS ── */}
      <section
        aria-labelledby="simbolos-titulo"
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <SectionHeading id="simbolos-titulo">Nuestros símbolos</SectionHeading>
          <div className="flex flex-col sm:flex-row gap-10 mt-8 items-start">
            {/* Escudo */}
            <figure className="flex flex-col items-center gap-4 flex-1">
              <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm flex items-center justify-center w-full">
                <Image
                  src={logo}
                  alt="Escudo del Centro Educativo Rural Caliyaco"
                  className="h-36 w-auto object-contain"
                />
              </div>
              <figcaption className="text-center">
                <h3 className="font-semibold text-verde-oscuro mb-1">Escudo</h3>
                <p className="text-sm text-texto-suave max-w-[280px]">
                  El libro y la antorcha representan la luz del saber. Los colores
                  del escudo remiten a la riqueza natural de la Amazonía.
                </p>
              </figcaption>
            </figure>
            {/* Bandera */}
            <figure className="flex flex-col items-center gap-4 flex-1">
              <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm flex items-center justify-center w-full">
                <Image
                  src={bandera}
                  alt="Bandera institucional del Centro Educativo Rural Caliyaco"
                  className="h-36 w-auto object-contain"
                />
              </div>
              <figcaption className="text-center">
                <h3 className="font-semibold text-verde-oscuro mb-1">Bandera</h3>
                <p className="text-sm text-texto-suave max-w-[280px]">
                  El azul representa la riqueza hídrica; el blanco simboliza la paz
                  y la convivencia; y el verde representa la flora y la belleza
                  natural.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── CAMPUSES ── */}
      <section
        aria-labelledby="sedes-titulo"
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <SectionHeading id="sedes-titulo">Nuestras sedes</SectionHeading>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 list-none m-0 p-0 mt-8">
            {SEDES.map((sede) => (
              <li
                key={sede}
                className="bg-gray-50 rounded-xl border border-black/5 px-4 py-3
                  text-sm font-medium text-verde-oscuro text-center
                  transition-colors duration-200 hover:bg-verde/5 hover:border-verde/20"
              >
                {sede}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-texto-suave leading-relaxed max-w-[600px]">
            Para conocer la ubicación, los niveles y los grados disponibles en cada
            sede, comunícate directamente con la institución.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-block px-6 py-3 font-semibold text-sm
                bg-verde text-white rounded-full no-underline
                transition-transform duration-300 hover:-translate-y-[3px] hover:shadow-lg
                focus-visible:outline-2 focus-visible:outline-verde-oscuro"
            >
              Ver información de contacto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}