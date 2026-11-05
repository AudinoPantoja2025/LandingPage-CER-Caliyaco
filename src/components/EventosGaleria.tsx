import Link from "next/link";
import type {
  CategoriaContenido,
  EventoContenido,
} from "@/lib/culturaEventos";
import GaleriaEncabezado from "./GaleriaEncabezado";
import GaleriaFotosVisor from "./GaleriaFotosVisor";
import GaleriaSelectorCategoria from "./GaleriaSelectorCategoria";
import { IconoFlechaIzquierda } from "./GaleriaIconos";

interface EventosGaleriaProps {
  categoria: CategoriaContenido;
  evento: EventoContenido;
}

/**
 * Vista editorial de la categoría Eventos.
 *
 * Reutiliza el encabezado y el selector de la galería. Las fotografías
 * aéreas se muestran casi completas, sin textos promocionales, y se abren en
 * el visor ampliado mediante `GaleriaFotosVisor`.
 */
export default function EventosGaleria({
  categoria,
  evento,
}: EventosGaleriaProps) {
  return (
    <div id="galeria-eventos">
      <GaleriaEncabezado
        idTitulo="titulo-eventos"
        titulo={evento.nombre}
        descripcion={evento.introduccion}
        migas={[
          { label: "Galería", href: "/galeria" },
          { label: "Eventos" },
        ]}
      />

      <section
        aria-label={evento.nombre}
        className="bg-white px-6 py-12 md:py-16"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="flex">
            <GaleriaSelectorCategoria activa="eventos" />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/galeria"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-verde-oscuro
                transition-colors hover:text-verde
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde"
            >
              <IconoFlechaIzquierda size={18} />
              Volver a la galería
            </Link>

            <p className="text-sm font-medium text-texto-suave">
              {categoria.fotos.length} fotografías
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <GaleriaFotosVisor
              fotos={categoria.fotos}
              titulo={evento.nombre}
              aspecto="aspect-[5/4]"
              columnas={2}
            />
          </div>

          {evento.nota && (
            <p
              className="mt-8 rounded-xl border border-black/5 bg-gray-50 px-5 py-4
                text-sm leading-relaxed text-texto-suave md:px-6 md:py-5"
            >
              {evento.nota}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
