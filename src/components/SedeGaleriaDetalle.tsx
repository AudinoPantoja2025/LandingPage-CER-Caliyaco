import Link from "next/link";
import {
  SLUGS_COLECCION_COMPARTIDA,
  type SedeGaleria,
} from "@/lib/galeria";
import GaleriaEncabezado from "./GaleriaEncabezado";
import GaleriaFotosVisor from "./GaleriaFotosVisor";
import { IconoFlechaIzquierda } from "./GaleriaIconos";

interface SedeGaleriaDetalleProps {
  sede: SedeGaleria;
}

/**
 * Detalle fotográfico de una sede.
 *
 * El encabezado mantiene las tres migas (Galería → Sedes educativas → sede) y
 * la cuadrícula reutiliza `GaleriaFotosVisor`. Cuando la carpeta representa a
 * más de una sede institucional, se avisa explícitamente para no atribuir cada
 * fotografía a una sede concreta.
 */
export default function SedeGaleriaDetalle({
  sede,
}: SedeGaleriaDetalleProps) {
  const esColeccionCompartida = SLUGS_COLECCION_COMPARTIDA.has(sede.slug);

  return (
    <div id="galeria-sede-detalle">
      <GaleriaEncabezado
        idTitulo="titulo-sede"
        titulo={sede.nombre}
        descripcion={`Explora las fotografías de ${sede.nombre} y conoce los espacios de nuestra comunidad educativa.`}
        migas={[
          { label: "Galería", href: "/galeria" },
          { label: "Sedes educativas", href: "/galeria/sedes-educativas" },
          { label: sede.nombre },
        ]}
      />

      <section
        aria-label={`Fotografías de ${sede.nombre}`}
        className="bg-white px-6 py-12 md:py-16"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/galeria/sedes-educativas"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-verde-oscuro
                transition-colors hover:text-verde
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde"
            >
              <IconoFlechaIzquierda size={18} />
              Volver a sedes
            </Link>

            <p className="text-sm font-medium text-texto-suave">
              {sede.fotos.length} fotografías
            </p>
          </div>

          {esColeccionCompartida && (
            <p className="mt-4 rounded-xl border border-black/5 bg-gray-50 px-4 py-3 text-sm leading-relaxed text-texto-suave">
              Las sedes Líbano y Villa Rosa comparten esta colección
              fotográfica.
            </p>
          )}

          <div className="mt-8">
            <GaleriaFotosVisor fotos={sede.fotos} titulo={sede.nombre} />
          </div>
        </div>
      </section>
    </div>
  );
}
