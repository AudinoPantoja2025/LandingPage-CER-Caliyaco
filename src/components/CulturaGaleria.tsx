"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { FotoSede } from "@/lib/galeria";
import { IconoAmpliar } from "./GaleriaIconos";
import Lightbox from "./Lightbox";

interface CulturaGaleriaProps {
  /** Colección completa del evento: define también el orden del visor. */
  fotos: FotoSede[];
  /** `src` de la fotografía que abre la composición. */
  destacadaSrc: string;
  /** Rótulo institucional sobre la fotografía destacada. */
  etiqueta: string;
  /** `object-position` de la fotografía destacada. */
  encuadreDestacada?: string;
}

interface EntradaFoto {
  foto: FotoSede;
  /** Índice absoluto dentro de `fotos`, usado por el visor y el foco. */
  indice: number;
}

const SIZES_DESTACADA = "(max-width: 767px) 100vw, 1100px";
const SIZES_CONTEXTO = "(max-width: 767px) 100vw, 50vw";
const SIZES_MOSAICO = "(max-width: 1023px) 50vw, 33vw";

interface MiniaturaProps {
  entrada: EntradaFoto;
  sizes: string;
  onAbrir: (indice: number) => void;
  registrar: (indice: number, elemento: HTMLButtonElement | null) => void;
}

/** Miniatura ampliable del mosaico del evento. */
function Miniatura({ entrada, sizes, onAbrir, registrar }: MiniaturaProps) {
  const { foto, indice } = entrada;

  return (
    <button
      ref={(elemento) => registrar(indice, elemento)}
      type="button"
      onClick={() => onAbrir(indice)}
      aria-label={`Ampliar ${foto.alt}`}
      className="group relative block aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-50
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde"
    >
      <Image
        src={foto.src}
        alt={foto.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out
          group-hover:scale-[1.03]
          motion-reduce:transform-none motion-reduce:transition-none"
      />

      <span
        aria-hidden="true"
        className="absolute inset-0 bg-verde-oscuro/0 transition-colors duration-300
          group-hover:bg-verde-oscuro/20"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center
          rounded-full bg-white/90 text-verde-oscuro opacity-0 transition-opacity duration-300
          group-hover:opacity-100 group-focus-visible:opacity-100
          motion-reduce:transition-none"
      >
        <IconoAmpliar size={18} />
      </span>
    </button>
  );
}

/**
 * Composición editorial del «Encuentro de expresiones culturales»: una
 * fotografía destacada, dos de contexto y un mosaico con el resto.
 *
 * Reutiliza `Lightbox` sobre la colección completa, así que las flechas
 * recorren las nueve fotografías en el orden en que aparecen en la página.
 * Se mantiene aislado de `GaleriaFotosVisor` para no alterar la rejilla de las
 * sedes ni la vista de Deporte.
 */
export default function CulturaGaleria({
  fotos,
  destacadaSrc,
  etiqueta,
  encuadreDestacada,
}: CulturaGaleriaProps) {
  const [indice, setIndice] = useState<number | null>(null);
  const botonesRef = useRef<Array<HTMLButtonElement | null>>([]);

  const registrar = useCallback(
    (posicion: number, elemento: HTMLButtonElement | null) => {
      botonesRef.current[posicion] = elemento;
    },
    []
  );

  const cerrar = useCallback(() => {
    const indiceAnterior = indice;
    setIndice(null);

    if (indiceAnterior !== null) {
      requestAnimationFrame(() => {
        botonesRef.current[indiceAnterior]?.focus();
      });
    }
  }, [indice]);

  const entradas: EntradaFoto[] = fotos.map((foto, posicion) => ({
    foto,
    indice: posicion,
  }));

  const indiceDestacada = Math.max(
    0,
    fotos.findIndex((foto) => foto.src === destacadaSrc)
  );

  const destacada = entradas[indiceDestacada];

  if (!destacada) return null;

  const resto = entradas.filter((entrada) => entrada !== destacada);
  const contexto = resto.slice(0, 2);
  const mosaico = resto.slice(2);

  return (
    <>
      <div className="grid gap-4 md:gap-5">
        <button
          ref={(elemento) => registrar(destacada.indice, elemento)}
          type="button"
          onClick={() => setIndice(destacada.indice)}
          aria-label={`Ampliar ${destacada.foto.alt}`}
          className="group relative block aspect-[3/2] w-full overflow-hidden rounded-2xl
            bg-verde-oscuro
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde
            sm:aspect-[16/10] lg:aspect-[16/9]"
        >
          <Image
            src={destacada.foto.src}
            alt={destacada.foto.alt}
            fill
            sizes={SIZES_DESTACADA}
            priority
            style={{ objectPosition: encuadreDestacada }}
            className="object-cover transition-transform duration-700 ease-out
              group-hover:scale-[1.02]
              motion-reduce:transform-none motion-reduce:transition-none"
          />

          {/* Rótulo arriba a la izquierda, sobre la franja de cielo: la
              fotografía se muestra completa, sin degradado que lave a los
              estudiantes ni al piso del patio. */}
          <span
            className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full
              bg-white/95 px-3.5 py-1 text-[0.7rem] font-semibold uppercase
              tracking-[0.12em] text-verde-oscuro sm:left-5 sm:top-5"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-amarillo"
            />
            {etiqueta}
          </span>

          {/* El indicador de ampliación queda siempre visible aquí: es la
              entrada principal al visor y en móvil no existe hover. */}
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center
              rounded-full bg-white/95 text-verde-oscuro shadow-sm
              sm:bottom-5 sm:right-5"
          >
            <IconoAmpliar size={20} />
          </span>
        </button>

        {contexto.length > 0 && (
          <ul
            aria-label="Fotografías del encuentro cultural"
            className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 md:gap-5"
          >
            {contexto.map((entrada) => (
              <li key={entrada.foto.src}>
                <Miniatura
                  entrada={entrada}
                  sizes={SIZES_CONTEXTO}
                  onAbrir={setIndice}
                  registrar={registrar}
                />
              </li>
            ))}
          </ul>
        )}

        {mosaico.length > 0 && (
          <ul
            aria-label="Más fotografías del encuentro cultural"
            className="m-0 grid list-none grid-cols-2 gap-4 p-0 md:gap-5 lg:grid-cols-3"
          >
            {mosaico.map((entrada) => (
              <li key={entrada.foto.src}>
                <Miniatura
                  entrada={entrada}
                  sizes={SIZES_MOSAICO}
                  onAbrir={setIndice}
                  registrar={registrar}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      {indice !== null && (
        <Lightbox
          fotos={fotos}
          indice={indice}
          onCerrar={cerrar}
          onCambiar={setIndice}
          mostrarLeyenda={false}
        />
      )}
    </>
  );
}
