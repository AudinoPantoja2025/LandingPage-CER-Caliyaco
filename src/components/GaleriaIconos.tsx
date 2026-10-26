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

/** Colección de imágenes. */
export function IconoGaleria(props: IconoProps = {}) {
  return (
    <IconoBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.5-3.5a2 2 0 0 0-2.8 0L6 20" />
    </IconoBase>
  );
}

/** Máscara de teatro: cultura y expresión creativa. */
export function IconoCultura(props: IconoProps = {}) {
  return (
    <IconoBase {...props}>
      <path d="M3 4h18v6a9 9 0 0 1-18 0V4Z" />
      <path d="M8 9h.01M16 9h.01" />
      <path d="M8.5 13a4.5 4.5 0 0 0 7 0" />
    </IconoBase>
  );
}

/** Balón: deporte, movimiento y trabajo en equipo. */
export function IconoDeporte(props: IconoProps = {}) {
  return (
    <IconoBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.2 15.6 9.8 14.2 14H9.8L8.4 9.8 12 7.2Z" />
      <path d="M12 3v4.2M3.7 8.9l4.7.9M6.3 19.2l3.5-5.2M17.7 19.2l-3.5-5.2M20.3 8.9l-4.7.9" />
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
