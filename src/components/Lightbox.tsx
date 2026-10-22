"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

/**
 * Fotografía mínima que necesita el visor. Se mantiene desacoplada de la capa
 * de datos para que cualquier colección con `src` y `alt` pueda reutilizarlo.
 */
export interface FotoAmpliable {
  src: string;
  alt: string;
}

interface LightboxProps {
  fotos: FotoAmpliable[];
  indice: number;
  onCerrar: () => void;
  onCambiar: (indice: number) => void;
}

/**
 * Visor de fotos en pantalla completa con navegación por botones, teclado
 * (Esc, ←, →), cierre al pulsar fuera y foco atrapado dentro del diálogo.
 *
 * La devolución del foco a la miniatura que abrió el visor la gestiona el
 * componente que lo invoca (`GaleriaFotosVisor`), que conoce la referencia.
 */
export default function Lightbox({
  fotos,
  indice,
  onCerrar,
  onCambiar,
}: LightboxProps) {
  const total = fotos.length;
  const foto = fotos[indice];
  const dialogoRef = useRef<HTMLDivElement>(null);

  const anterior = useCallback(() => {
    onCambiar((indice - 1 + total) % total);
  }, [indice, total, onCambiar]);

  const siguiente = useCallback(() => {
    onCambiar((indice + 1) % total);
  }, [indice, total, onCambiar]);

  useEffect(() => {
    const manejarTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCerrar();
        return;
      }

      if (e.key === "ArrowLeft") {
        anterior();
        return;
      }

      if (e.key === "ArrowRight") {
        siguiente();
        return;
      }

      // Foco atrapado: Tab y Shift+Tab recorren solo los controles visibles.
      if (e.key === "Tab") {
        const enfocables =
          dialogoRef.current?.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

        if (!enfocables || enfocables.length === 0) return;

        const primero = enfocables[0];
        const ultimo = enfocables[enfocables.length - 1];

        if (e.shiftKey && document.activeElement === primero) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primero.focus();
        }
      }
    };

    document.addEventListener("keydown", manejarTecla);

    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", manejarTecla);
      document.body.style.overflow = overflowPrevio;
    };
  }, [onCerrar, anterior, siguiente]);

  if (!foto) return null;

  const boton =
    "flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors " +
    "bg-white/10 hover:bg-white/25 border border-white/20 " +
    "focus-visible:outline-2 focus-visible:outline-amarillo";

  return (
    <div
      ref={dialogoRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ampliada: ${foto.alt}`}
      onClick={onCerrar}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
    >
      {/* Cerrar */}
      <button
        type="button"
        autoFocus
        onClick={onCerrar}
        aria-label="Cerrar visor"
        className={`${boton} absolute top-4 right-4`}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Anterior */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          anterior();
        }}
        aria-label="Foto anterior"
        className={`${boton} absolute left-2 sm:left-6`}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Foto */}
      <figure
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[82vh] w-full max-w-5xl"
      >
        <div className="relative h-[70vh] w-full">
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-white/85">
          <span className="truncate">{foto.alt}</span>
          <span aria-live="polite" className="shrink-0 tabular-nums">
            {indice + 1} / {total}
          </span>
        </figcaption>
      </figure>

      {/* Siguiente */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          siguiente();
        }}
        aria-label="Foto siguiente"
        className={`${boton} absolute right-2 sm:right-6`}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
