import Link from "next/link";

export interface MigaGaleria {
  label: string;
  /** Sin `href` en la miga actual. */
  href?: string;
}

interface GaleriaEncabezadoProps {
  /** Identificador del `h1`, usado por `aria-labelledby` de la sección. */
  idTitulo: string;
  titulo: string;
  descripcion: string;
  migas: MigaGaleria[];
}

/**
 * Encabezado compacto de las vistas internas de la galería.
 *
 * Mantiene el patrón de encabezado oscuro de las páginas internas del proyecto
 * (fondo verde-oscuro, sin acento amarillo) y reduce el ritmo vertical para que
 * el contenido y las fotografías ocupen la mayor parte de la pantalla.
 */
export default function GaleriaEncabezado({
  idTitulo,
  titulo,
  descripcion,
  migas,
}: GaleriaEncabezadoProps) {
  return (
    <section
      aria-labelledby={idTitulo}
      className="bg-verde-oscuro px-6 pt-24 pb-12 text-white md:pt-28 md:pb-14"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <nav aria-label="Ruta de navegación">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
            {migas.map((miga, i) => (
              <li key={`${miga.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-white/40">
                    /
                  </span>
                )}
                {miga.href ? (
                  <Link
                    href={miga.href}
                    className="underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amarillo"
                  >
                    {miga.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white/90">
                    {miga.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1
          id={idTitulo}
          className="mt-8 text-3xl font-bold leading-tight text-balance md:text-4xl"
        >
          {titulo}
        </h1>

        <p className="mt-4 max-w-[720px] leading-relaxed text-white/80">
          {descripcion}
        </p>
      </div>
    </section>
  );
}
