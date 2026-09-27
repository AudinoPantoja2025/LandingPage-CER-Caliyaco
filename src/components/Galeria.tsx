"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SEDES_GALERIA } from "@/lib/galeria";
import Lightbox from "@/components/Lightbox";

const FILTRO_TODAS = "todas";

/**
 * Galería completa con filtro por sede. Las fotos se cargan de forma
 * diferida (lazy) para no saturar la velocidad de la página.
 */
export default function Galeria() {
  const [filtro, setFiltro] = useState<string>(FILTRO_TODAS);
  const [ampliada, setAmpliada] = useState<number | null>(null);

  const cambiarFiltro = (nuevo: string) => {
    setFiltro(nuevo);
    setAmpliada(null);
  };

  const fotos = useMemo(() => {
    if (filtro === FILTRO_TODAS) {
      return SEDES_GALERIA.flatMap((sede) =>
        sede.fotos.map((foto) => ({ ...foto, sede: sede.nombre }))
      );
    }
    const sede = SEDES_GALERIA.find((s) => s.slug === filtro);
    return (sede?.fotos ?? []).map((foto) => ({ ...foto, sede: sede!.nombre }));
  }, [filtro]);

  return (
    <section id="galeria" aria-labelledby="titulo-galeria" className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto w-full">
        <h2
          id="titulo-galeria"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Galería
        </h2>
        <p className="text-texto-suave max-w-[700px] mb-8">
          Explora los momentos más significativos de nuestra comunidad
          educativa.
        </p>

        {/* Filtro por sede */}
        <div
          role="group"
          aria-label="Filtrar fotos por sede"
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            type="button"
            onClick={() => cambiarFiltro(FILTRO_TODAS)}
            aria-pressed={filtro === FILTRO_TODAS}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors
              focus-visible:outline-2 focus-visible:outline-verde ${
                filtro === FILTRO_TODAS
                  ? "bg-verde text-white"
                  : "bg-gray-100 text-texto hover:bg-gray-200"
              }`}
          >
            Todas
          </button>
          {SEDES_GALERIA.map((sede) => (
            <button
              key={sede.slug}
              type="button"
              onClick={() => cambiarFiltro(sede.slug)}
              aria-pressed={filtro === sede.slug}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors
                focus-visible:outline-2 focus-visible:outline-verde ${
                  filtro === sede.slug
                    ? "bg-verde text-white"
                    : "bg-gray-100 text-texto hover:bg-gray-200"
                }`}
            >
              {sede.nombre}
            </button>
          ))}
        </div>

        {/* Fotos */}
        <ul
          aria-live="polite"
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0"
        >
          {fotos.map((foto, i) => (
            <li
              key={foto.src}
              className="relative h-48 md:h-64 overflow-hidden rounded-xl group bg-gray-100"
            >
              <button
                type="button"
                onClick={() => setAmpliada(i)}
                aria-label={`Ampliar foto de ${foto.sede}: ${foto.alt}`}
                className="block h-full w-full cursor-zoom-in
                  focus-visible:outline-2 focus-visible:outline-verde focus-visible:outline-offset-2 rounded-xl"
              >
                <Image
                  src={foto.src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 px-3 py-2 text-xs font-medium text-white
                  bg-gradient-to-t from-black/70 to-transparent pointer-events-none
                  opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {foto.sede}
              </span>
            </li>
          ))}
        </ul>

        {/* Visor en pantalla completa */}
        {ampliada !== null && fotos[ampliada] && (
          <Lightbox
            fotos={fotos}
            indice={ampliada}
            onCerrar={() => setAmpliada(null)}
            onCambiar={setAmpliada}
          />
        )}
      </div>
    </section>
  );
}
