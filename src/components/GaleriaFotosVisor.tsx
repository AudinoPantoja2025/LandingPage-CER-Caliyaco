"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { FotoSede } from "@/lib/galeria";
import Lightbox from "./Lightbox";
import { IconoAmpliar } from "./GaleriaIconos";

interface GaleriaFotosVisorProps {
  fotos: FotoSede[];
  /** Nombre de la colección, usado por el visor ampliado. */
  titulo: string;
  /**
   * Relación de aspecto de cada miniatura como clase Tailwind completa.
   * Por defecto, horizontal 4:3 (fotografías de sedes).
   */
  aspecto?: string;
  /**
   * Columnas máximas en pantallas medianas y grandes. Con 2, las miniaturas se
   * apilan en móvil para que el contenido de piezas gráficas siga legible.
   */
  columnas?: 2 | 3;
}

/**
 * Cuadrícula de fotografías con visor ampliado.
 *
 * Se usa en el detalle de una sede, en la vista de Eventos y en cualquier
 * categoría con fotografías. Al cerrar el visor, el foco vuelve a la miniatura
 * que lo abrió.
 */
export default function GaleriaFotosVisor({
  fotos,
  titulo,
  aspecto,
  columnas = 3,
}: GaleriaFotosVisorProps) {
  const [indice, setIndice] = useState<number | null>(null);
  const botonesRef = useRef<Array<HTMLButtonElement | null>>([]);

  const cerrar = useCallback(() => {
    const indiceAnterior = indice;
    setIndice(null);

    if (indiceAnterior !== null) {
      requestAnimationFrame(() => {
        botonesRef.current[indiceAnterior]?.focus();
      });
    }
  }, [indice]);

  return (
    <>
      <ul
        aria-label={`Fotografías de ${titulo}`}
        className={`m-0 grid list-none gap-4 p-0 md:gap-5 ${
          columnas === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-2 md:grid-cols-3"
        }`}
      >
        {fotos.map((foto, i) => (
          <li key={foto.src}>
            <button
              ref={(elemento) => {
                botonesRef.current[i] = elemento;
              }}
              type="button"
              onClick={() => setIndice(i)}
              aria-label={`Ampliar ${foto.alt}`}
              className={`group relative block w-full overflow-hidden rounded-xl bg-gray-50
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde ${
                  aspecto ?? "aspect-[4/3]"
                }`}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes={
                  columnas === 2
                    ? "(max-width: 639px) 100vw, 50vw"
                    : "(max-width: 767px) 50vw, 33vw"
                }
                priority={i === 0}
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
                  group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <IconoAmpliar size={18} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {indice !== null && (
        <Lightbox
          fotos={fotos}
          indice={indice}
          onCerrar={cerrar}
          onCambiar={setIndice}
        />
      )}
    </>
  );
}
