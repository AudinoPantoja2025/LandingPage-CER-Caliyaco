"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

export interface FotoAmpliable {
  src: string;
  alt: string;
  sede: string;
}

interface LightboxProps {
  fotos: FotoAmpliable[];
  indice: number;
  onCerrar: () => void;
  onCambiar: (indice: number) => void;
}

/**
 * Visor de fotos en pantalla completa con navegación por
 * botones, teclado (Esc, ←, →) y cierre al pulsar fuera.
 */
export default function Lightbox({ fotos, indice, onCerrar, onCambiar }: LightboxProps) {
  const total = fotos.length;
  const foto = fotos[indice];

  const anterior = useCallback(() => {
    onCambiar((indice - 1 + total) % total);
  }, [indice, total, onCambiar]);

  const siguiente = useCallback(() => {
    onCambiar((indice + 1) % total);
  }, [indice, total, onCambiar]);

  useEffect(() => {
    const manejarTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") siguiente();
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
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Anterior */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); anterior(); }}
        aria-label="Foto anterior"
        className={`${boton} absolute left-2 sm:left-6`}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true">
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
          <span className="truncate">
            {foto.sede} — {foto.alt}
          </span>
          <span aria-live="polite" className="shrink-0 tabular-nums">
            {indice + 1} / {total}
          </span>
        </figcaption>
      </figure>

      {/* Siguiente */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); siguiente(); }}
        aria-label="Foto siguiente"
        className={`${boton} absolute right-2 sm:right-6`}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
