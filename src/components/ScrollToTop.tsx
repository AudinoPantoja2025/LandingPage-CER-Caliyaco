"use client";

import { useEffect } from "react";

/**
 * Lleva la ventana al inicio al montar la página (solo si la URL no trae
 * fragmento). Corrige casos donde el navegador restaura la posición anterior
 * y la página abre a mitad de contenido.
 */
export default function ScrollToTop() {
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return null;
}
