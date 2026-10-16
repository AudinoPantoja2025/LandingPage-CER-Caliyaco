import Image from "next/image";
import { CATEGORIAS_GALERIA, type CategoriaGaleria } from "@/lib/galeria";

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

/* ── Leaf / nature icon, used in the institutional block ── */
function IconoHoja() {
  return (
    <IconoBase>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </IconoBase>
  );
}

/* ── Arrow icon, used in the "Explorar" action ── */
function IconoFlecha() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

interface TarjetaCategoriaProps {
  categoria: CategoriaGaleria;
  /** La primera fotografía se carga con prioridad: es la más cercana al viewport. */
  prioritaria: boolean;
  /** Retardo de la animación de entrada, para escalonar las tarjetas. */
  retardoMs: number;
}

/**
 * Tarjeta de categoría de la portada de Galería: fotografía de fondo y, en la
 * mitad inferior, una superposición con los colores institucionales que
 * garantiza la lectura del texto sin oscurecer toda la imagen.
 */
function TarjetaCategoria({
  categoria,
  prioritaria,
  retardoMs,
}: TarjetaCategoriaProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-verde-oscuro
        aspect-[3/4] md:aspect-[3/2] lg:aspect-[4/5]"
    >
      <Image
        src={categoria.imagen.src}
        alt={categoria.imagen.alt}
        fill
        sizes="(max-width: 1023px) 100vw, 50vw"
        priority={prioritaria}
        style={{ objectPosition: categoria.encuadre }}
        className="object-cover transition-transform duration-700 ease-out
          group-hover:scale-[1.04]
          motion-reduce:transform-none motion-reduce:transition-none"
      />

      {/* Superposición institucional: solo la franja inferior, para no oscurecer
          la fotografía más de lo necesario. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t
          from-verde-oscuro via-verde-oscuro/85 to-transparent"
      />

      {/* La animación de entrada se aplica al texto, no a la imagen, para no
          retrasar la pintura de la fotografía (candidata a LCP). */}
      <div
        style={{ animationDelay: `${retardoMs}ms` }}
        className="relative flex h-full flex-col justify-end gap-3 p-6 md:p-7 lg:p-8
          animate-[aparecer-sutil_0.55s_ease-out_both] motion-reduce:animate-none"
      >
        <span
          className="inline-flex w-fit items-center rounded-full border border-white/25
            bg-white/15 px-3.5 py-1 text-[0.7rem] font-semibold uppercase
            tracking-[0.14em] text-white"
        >
          {categoria.identificador}
        </span>

        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
          {categoria.titulo}
        </h2>

        <p className="max-w-[46ch] text-sm leading-relaxed text-white/85 md:text-base">
          {categoria.descripcion}
        </p>

        {/* Acción visual preparada. El subrayado y la flecha en amarillo son el
            acento institucional; el texto va en blanco por contraste sobre la
            fotografía (mismo tratamiento que la navegación del header). */}
        <span
          className="relative mt-1 inline-flex w-fit items-center gap-2 pb-1
            text-sm font-semibold text-white
            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
            after:origin-left after:scale-x-0 after:rounded-full after:bg-amarillo
            after:transition-transform after:duration-300
            group-hover:after:scale-x-100
            motion-reduce:after:transition-none"
        >
          Explorar
          <span
            className="text-amarillo transition-transform duration-300
              group-hover:translate-x-1
              motion-reduce:transform-none motion-reduce:transition-none"
          >
            <IconoFlecha />
          </span>
        </span>
      </div>
    </article>
  );
}

/**
 * Portada de la galería: encabezado de página, las dos categorías principales
 * (Sedes educativas y Cultura y deporte) y un bloque institucional de cierre.
 */
export default function Galeria() {
  return (
    <div id="galeria">
      {/* ── PAGE HEADER (mismo tratamiento que las demás páginas internas) ── */}
      <section
        aria-labelledby="titulo-galeria"
        className="py-20 px-6 bg-verde-oscuro text-white"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <h1
            id="titulo-galeria"
            className="text-3xl md:text-5xl font-bold leading-tight mb-4 mt-8 text-balance"
          >
            Galería
          </h1>
          <p className="text-white/80 text-lg font-medium max-w-[720px] leading-relaxed">
            Explora nuestras sedes, experiencias, cultura y deporte. Descubre los
            espacios y momentos que forman parte de nuestra comunidad educativa.
          </p>
        </div>
      </section>

      {/* ── CATEGORÍAS ── */}
      <section
        aria-label="Categorías de la galería"
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-[1100px] mx-auto w-full">
          {/*
            TODO(navegación): las vistas internas de cada categoría todavía no
            existen. Cuando se implementen, se envuelve cada tarjeta en un
            `next/link` y se trasladan allí los efectos `group-hover`.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CATEGORIAS_GALERIA.map((categoria, i) => (
              <TarjetaCategoria
                key={categoria.identificador}
                categoria={categoria}
                prioritaria={i === 0}
                retardoMs={i * 100}
              />
            ))}
          </div>

          {/* ── BLOQUE INSTITUCIONAL ── */}
          <section
            aria-labelledby="titulo-comunidad"
            className="relative overflow-hidden mt-10 md:mt-12
              rounded-2xl border border-black/5 bg-gray-50 px-6 py-7 md:px-8 md:py-8"
          >
            {/* Acento institucional lateral */}
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-verde" />

            {/* Detalle decorativo de naturaleza (SVG inline, sin recursos nuevos) */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-4 h-32 w-32 text-verde/10"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            </svg>

            <div className="relative flex items-start gap-4 md:gap-5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                  bg-verde/10 text-verde md:h-11 md:w-11"
              >
                <IconoHoja />
              </span>
              <div>
                <h2
                  id="titulo-comunidad"
                  className="text-lg md:text-xl font-semibold text-verde-oscuro mb-2"
                >
                  Una comunidad que aprende, comparte y crece
                </h2>
                <p className="text-texto-suave leading-relaxed max-w-[62ch]">
                  En el CER Caliyaco creemos en el poder de la educación para
                  transformar vidas y construir un mejor futuro, en armonía con
                  nuestra naturaleza.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
