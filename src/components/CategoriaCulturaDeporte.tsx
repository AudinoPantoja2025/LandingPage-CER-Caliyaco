import Link from "next/link";
import type { CategoriaCultural } from "@/lib/culturaDeporte";
import GaleriaEncabezado from "./GaleriaEncabezado";
import GaleriaFotosVisor from "./GaleriaFotosVisor";
import {
  IconoCultura,
  IconoDeporte,
  IconoFlechaIzquierda,
} from "./GaleriaIconos";

interface CategoriaCulturaDeporteProps {
  categoria: CategoriaCultural;
}

/**
 * Detalle de una categoría de «Cultura y deporte».
 *
 * Lo usa la categoría Deporte, que aún no tiene fotografías reales y muestra
 * el estado vacío intencional, sin cargas simuladas ni formularios. Cultura
 * tiene su propia vista editorial en `CulturaEncuentro`. La rama con
 * `GaleriaFotosVisor` queda disponible por si otra categoría recibe fotos.
 */
export default function CategoriaCulturaDeporte({
  categoria,
}: CategoriaCulturaDeporteProps) {
  const Icono = categoria.icono === "cultura" ? IconoCultura : IconoDeporte;
  const tieneFotos = categoria.fotos.length > 0;

  return (
    <div id="galeria-categoria">
      <GaleriaEncabezado
        idTitulo="titulo-categoria"
        titulo={categoria.titulo}
        descripcion={categoria.descripcion}
        migas={[
          { label: "Galería", href: "/galeria" },
          {
            label: "Cultura y deporte",
            href: "/galeria/cultura-y-deporte",
          },
          { label: categoria.titulo },
        ]}
      />

      <section
        aria-label={`Galería de ${categoria.titulo}`}
        className="bg-white px-6 py-16"
      >
        <div
          className={`mx-auto w-full ${tieneFotos ? "max-w-[1100px]" : "max-w-[720px]"}`}
        >
          {tieneFotos ? (
            <GaleriaFotosVisor
              fotos={categoria.fotos}
              titulo={categoria.titulo}
            />
          ) : (
            <div
              className="rounded-2xl border border-black/5 bg-gray-50 px-6 py-10 text-center
                md:px-10 md:py-12"
            >
              <span
                aria-hidden="true"
                className="mx-auto flex h-14 w-14 items-center justify-center
                  rounded-full bg-verde/10 text-verde"
              >
                <Icono size={26} />
              </span>

              <h2 className="mt-5 text-2xl font-bold leading-tight text-balance text-verde-oscuro md:text-3xl">
                {categoria.vacio.titulo}
              </h2>

              <p className="mx-auto mt-3 max-w-[52ch] leading-relaxed text-texto-suave">
                {categoria.vacio.descripcion}
              </p>

              <Link
                href="/galeria/cultura-y-deporte"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-verde/30
                  px-5 py-2.5 text-sm font-semibold text-verde-oscuro transition-colors
                  hover:bg-verde hover:text-white
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde"
              >
                <IconoFlechaIzquierda size={18} />
                Volver a Cultura y deporte
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
