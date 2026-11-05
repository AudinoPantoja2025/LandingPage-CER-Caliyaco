/**
 * Iconografía local de la galería.
 *
 * Sigue la convención del proyecto: SVG inline, `viewBox 0 0 24 24`,
 * `stroke="currentColor"`, sin dependencias externas y `aria-hidden`.
 * Se centraliza aquí para no duplicar la flecha entre las vistas nuevas y
 * `Galeria.tsx`.
 */

import type { ReactNode } from "react";

interface IconoProps {
  size?: number;
  className?: string;
}

function IconoBase({
  children,
  size = 22,
  className,
}: IconoProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

/** Flecha hacia la derecha, usada en las acciones «Explorar» y «Ver fotografías». */
export function IconoFlecha(props: IconoProps = {}) {
  return (
    <IconoBase {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </IconoBase>
  );
}

/** Flecha hacia la izquierda, usada en las acciones de vuelta. */
export function IconoFlechaIzquierda(props: IconoProps = {}) {
  return (
    <IconoBase {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </IconoBase>
  );
}

/** Cámara: indica que una tarjeta es una colección fotográfica. */
export function IconoCamara(props: IconoProps = {}) {
  return (
    <IconoBase {...props}>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
      <circle cx="12" cy="13" r="3" />
    </IconoBase>
  );
}

/** Lupa con signo más: ampliar una fotografía. */
export function IconoAmpliar(props: IconoProps = {}) {
  return (
    <IconoBase {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
    </IconoBase>
  );
}
