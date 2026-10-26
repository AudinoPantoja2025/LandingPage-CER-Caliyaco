import Link from "next/link";
import type { CategoriaCultural, EventoCultural } from "@/lib/culturaDeporte";
import CulturaGaleria from "./CulturaGaleria";
import GaleriaEncabezado from "./GaleriaEncabezado";
import GaleriaSelectorCategoria from "./GaleriaSelectorCategoria";
import { IconoFlechaIzquierda } from "./GaleriaIconos";

interface CulturaEncuentroProps {
  categoria: CategoriaCultural;
  evento: EventoCultural;
}

/**
 * Vista editorial de la categoría Cultura.
 *
 * Sustituye el estado vacío por la colección real del «Encuentro de
 * expresiones culturales»: encabezado compacto reutilizado, selector de
 * categorías, fotografía destacada y mosaico. La vista de Deporte conserva su
 * propio componente y no depende de esta composición.
 */
export default function CulturaEncuentro({
  categoria,
  evento,
}: CulturaEncuentroProps) {
  return (
    <div id="galeria-cultura">
      <GaleriaEncabezado
        idTitulo="titulo-cultura"
        titulo={evento.nombre}
        descripcion={evento.introduccion}
        migas={[
          { label: "Galería", href: "/galeria" },
          { label: "Cultura y deporte", href: "/galeria/cultura-y-deporte" },
          { label: "Cultura" },
        ]}
      />

      <section
        aria-label={evento.nombre}
        className="bg-white px-6 py-12 md:py-16"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          {/* `flex` para que el selector (w-full en móvil, w-auto desde sm)
              se ajuste a su contenido y no ocupe todo el ancho. */}
          <div className="flex">
            <GaleriaSelectorCategoria activa="cultura-deporte" />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/galeria/cultura-y-deporte"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-verde-oscuro
                transition-colors hover:text-verde
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde"
            >
              <IconoFlechaIzquierda size={18} />
              Volver a Cultura y deporte
            </Link>

            <p className="text-sm font-medium text-texto-suave">
              {categoria.fotos.length} fotografías
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <CulturaGaleria
              fotos={categoria.fotos}
              destacadaSrc={evento.destacadaSrc}
              etiqueta={evento.etiqueta}
              encuadreDestacada={evento.encuadreDestacada}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
