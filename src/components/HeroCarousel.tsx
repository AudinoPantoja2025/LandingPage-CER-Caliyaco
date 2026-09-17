"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { locationSlides } from "@/lib/locations";

const AUTOPLAY_MS = 6000;

interface HeroCarouselProps {
  /** Desactiva el autoplay (útil para tests o reduced-motion). */
  autoplay?: boolean;
}

export default function HeroCarousel({ autoplay = true }: HeroCarouselProps) {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const total = locationSlides.length;
  const temporizador = useRef<ReturnType<typeof setInterval> | null>(null);

  const siguiente = useCallback(() => {
    setIndice((prev) => (prev + 1) % total);
  }, [total]);

  const anterior = useCallback(() => {
    setIndice((prev) => (prev - 1 + total) % total);
  }, [total]);

  const irA = useCallback(
    (i: number) => {
      setIndice(((i % total) + total) % total);
    },
    [total]
  );

  /* Autoplay con respeto a prefers-reduced-motion */
  useEffect(() => {
    if (!autoplay || pausado) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    temporizador.current = setInterval(siguiente, AUTOPLAY_MS);
    return () => {
      if (temporizador.current) clearInterval(temporizador.current);
    };
  }, [autoplay, pausado, siguiente, indice]);

  /* Navegación por teclado cuando el foco está en el carrusel */
  const manejarTeclado = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") siguiente();
    if (e.key === "ArrowLeft") anterior();
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotografías de la sede del CER Caliyaco"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
      onKeyDown={manejarTeclado}
    >
      {/* Slides con fundido cruzado */}
      {locationSlides.map((slide, i) => {
        const activo = i === indice;
        return (
          <div
            key={slide.src}
            aria-hidden={!activo}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              activo ? "opacity-100 z-[1]" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className={`object-cover transition-transform duration-[7000ms] ease-out ${
                activo ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* Overlay institucional: mantiene la identidad verde y la legibilidad.
          Sin esto las fotos contrastarían con el resto de la página. */}
      {/* Velo mínimo: solo un degradado inferior suave para que los
          controles se lean, las fotos quedan totalmente despejadas */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 z-[2] bg-gradient-to-t from-black/30 to-transparent"
      />

      {/* Controles */}
      <div className="absolute z-[3] inset-x-0 bottom-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={anterior}
          aria-label="Foto anterior"
          className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full
            border border-white/30 bg-white/10 text-white backdrop-blur-sm
            transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-amarillo"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Elegir foto">
          {locationSlides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === indice}
              aria-label={`Ir a la foto ${i + 1} de ${total}`}
              onClick={() => irA(i)}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-amarillo ${
                i === indice
                  ? "w-8 bg-amarillo"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={siguiente}
          aria-label="Foto siguiente"
          className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full
            border border-white/30 bg-white/10 text-white backdrop-blur-sm
            transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-amarillo"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Texto vivo para lectores de pantalla */}
      <p className="sr-only" aria-live="polite">
        Foto {indice + 1} de {total}: {locationSlides[indice].alt}
      </p>
    </div>
  );
}
