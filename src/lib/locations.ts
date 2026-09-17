export interface LocationSlide {
  src: string;
  alt: string;
}

/**
 * Fotografías de la sede (public/locations).
 * Se usan como fondo del Hero en la página de inicio.
 */
export const locationSlides: LocationSlide[] = [
  {
    src: "/locations/IMG_20260917_085047.jpg",
    alt: "Instalaciones del Centro Educativo Rural Caliyaco",
  },
  {
    src: "/locations/IMG_20260917_085436.jpg",
    alt: "Entorno natural de la sede del CER Caliyaco",
  },
  {
    src: "/locations/IMG_20260917_085511.jpg",
    alt: "Espacios educativos del CER Caliyaco",
  },
  {
    src: "/locations/IMG_20260917_085533.jpg",
    alt: "Vista de la sede rural Caliyaco en Mocoa, Putumayo",
  },
];
