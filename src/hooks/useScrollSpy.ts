"use client";

import { useEffect, useState } from "react";

const SECCIONES = ["inicio", "nosotros", "programas", "galeria", "matriculas", "contacto"] as const;

export type SeccionId = (typeof SECCIONES)[number];

interface UseScrollSpyOptions {
  rootMargin?: string;
}

/**
 * Detecta qué sección de la página es visible en el viewport
 * y devuelve su id. Útil para resaltar el enlace activo del menú.
 */
export default function useScrollSpy(options: UseScrollSpyOptions = {}): SeccionId | string {
  const { rootMargin = "-40% 0px -55% 0px" } = options;
  const [seccionActiva, setSeccionActiva] = useState<SeccionId | string>("inicio");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observar = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            setSeccionActiva(entrada.target.id);
          }
        });
      },
      { rootMargin }
    );

    SECCIONES.forEach((id) => {
      const elemento = document.getElementById(id);
      if (elemento) observar.observe(elemento);
    });

    return () => observar.disconnect();
  }, [rootMargin]);

  return seccionActiva;
}