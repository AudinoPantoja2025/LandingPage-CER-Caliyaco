import Link from "next/link";
import Image from "next/image";
import {
  CATEGORIAS_CULTURA_DEPORTE,
  type CategoriaCultural,
} from "@/lib/culturaDeporte";
import GaleriaEncabezado from "./GaleriaEncabezado";
import GaleriaSelectorCategoria from "./GaleriaSelectorCategoria";
import {
  IconoCultura,
  IconoDeporte,
  IconoFlecha,
} from "./GaleriaIconos";

/** Patrón decorativo de la tarjeta Cultura: máscara de teatro en trazo fino. */
function PatronCultura() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 text-white/10
        transition-transform duration-700 ease-out group-hover:scale-105
        motion-reduce:transform-none motion-reduce:transition-none md:h-80 md:w-80"
    >
      <path d="M3 4h18v6a9 9 0 0 1-18 0V4Z" strokeWidth="0.5" />
      <path
        d="M8 9h.01M16 9h.01"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M8.5 13a4.5 4.5 0 0 0 7 0"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Patrón decorativo de la tarjeta Deporte: balón con trazos de movimiento. */
function PatronDeporte() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 text-white/10
        transition-transform duration-700 ease-out group-hover:scale-105
        motion-reduce:transform-none motion-reduce:transition-none md:h-80 md:w-80"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="0.5" />
      <path
        d="M12 7.2 15.6 9.8 14.2 14H9.8L8.4 9.8 12 7.2Z"
        strokeWidth="0.5"
      />
      <path
        d="M12 3v4.2M3.7 8.9l4.7.9M6.3 19.2l3.5-5.2M17.7 19.2l-3.5-5.2M20.3 8.9l-4.7.9"
        strokeWidth="0.5"
      />
    </svg>
  );
}

interface TarjetaCategoriaCulturalProps {
  categoria: CategoriaCultural;
}

/**
 * Tarjeta de gran formato para una categoría cultural o deportiva.
 * Si la categoría tiene `imagen`, se usa una fotografía real con la misma
 * superposición institucional de la tarjeta de /galeria (franja inferior con
 * degradado verde para la lectura del texto). Sin imagen, la identidad se
 * construye con la paleta institucional, el icono local y un patrón discreto,
 * nunca con imágenes simuladas.
 */
function TarjetaCategoriaCultural({
  categoria,
}: TarjetaCategoriaCulturalProps) {
  const esCultura = categoria.slug === "cultura";
  const Icono = esCultura ? IconoCultura : IconoDeporte;
  const tieneImagen = Boolean(categoria.imagen);

  return (
    <Link
      href={`/galeria/cultura-y-deporte/${categoria.slug}`}
      aria-label={categoria.accion}
      className={`group relative flex min-h-[340px] flex-col justify-between overflow-hidden
        rounded-2xl p-7 text-white transition-shadow duration-300 hover:shadow-xl
        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amarillo
        md:min-h-[400px] md:p-9 ${
          esCultura ? "bg-verde-oscuro" : "bg-verde"
        }`}
    >
      {categoria.imagen && (
        <>
          <Image
            src={categoria.imagen.src}
            alt={categoria.imagen.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            style={{ objectPosition: categoria.encuadre }}
            className="object-cover transition-transform duration-700 ease-out
              group-hover:scale-[1.04]
              motion-reduce:transform-none motion-reduce:transition-none"
          />

          {/* Superposición institucional: solo la franja inferior, igual que
              la tarjeta de /galeria, para no oscurecer toda la fotografía. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t
              from-verde-oscuro via-verde-oscuro/85 to-transparent"
          />
        </>
      )}

      {!tieneImagen && (esCultura ? <PatronCultura /> : <PatronDeporte />)}

      <span
        aria-hidden="true"
        className={`relative flex h-12 w-12 items-center justify-center rounded-full
          ${tieneImagen ? "border-white/25 bg-verde-oscuro/60" : "border border-white/20 bg-white/10"}`}
      >
        <Icono size={26} />
      </span>

      <div className="relative mt-10">
        <h2 className="text-3xl font-bold leading-tight text-balance md:text-4xl">
          {categoria.titulo}
        </h2>
        <p className="mt-3 max-w-[42ch] leading-relaxed text-white/85">
          {categoria.descripcion}
        </p>

        <span
          className="relative mt-6 inline-flex w-fit items-center gap-2 pb-1 text-sm font-semibold text-white
            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
            after:origin-left after:scale-x-0 after:rounded-full after:bg-amarillo
            after:transition-transform after:duration-300
            group-hover:after:scale-x-100
            motion-reduce:after:transition-none"
        >
          {categoria.accion}
          <span
            className="text-amarillo transition-transform duration-300
              group-hover:translate-x-1
              motion-reduce:transform-none motion-reduce:transition-none"
          >
            <IconoFlecha size={18} />
          </span>
        </span>
      </div>
    </Link>
  );
}

/**
 * Vista «Cultura y deporte»: encabezado propio, selector activo y exactamente
 * dos tarjetas. Cultura usa su fotografía real del encuentro; Deporte se
 * mantiene con el patrón decorativo hasta contar con imágenes propias.
 */
export default function CulturaDeporte() {
  return (
    <div id="galeria-cultura-deporte">
      <GaleriaEncabezado
        idTitulo="titulo-cultura-deporte"
        titulo="Aprendemos, compartimos y celebramos"
        descripcion="La cultura y el deporte nos permiten compartir experiencias, desarrollar talentos y fortalecer los lazos de nuestra comunidad educativa."
        migas={[
          { label: "Galería", href: "/galeria" },
          { label: "Cultura y deporte" },
        ]}
      />

      <section
        aria-label="Cultura y deporte"
        className="bg-white px-6 py-12 md:py-16"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <GaleriaSelectorCategoria activa="cultura-deporte" />

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {CATEGORIAS_CULTURA_DEPORTE.map((categoria) => (
              <TarjetaCategoriaCultural
                key={categoria.slug}
                categoria={categoria}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
