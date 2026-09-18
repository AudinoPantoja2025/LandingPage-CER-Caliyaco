import Image from "next/image";
import Link from "next/link";
import { locationSlides } from "@/lib/locations";

/**
 * Vista previa de la galería con las fotos disponibles en public/locations.
 * Para agregar más fotos, súbelas a public/locations y añádelas al arreglo
 * locationSlides en src/lib/locations.ts; aparecerán aquí automáticamente.
 */
const FOTOS_PREVIEW = locationSlides.slice(0, 4);

export default function GaleriaPreview() {
  return (
    <section
      id="galeria-preview"
      aria-labelledby="titulo-galeria-preview"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <h2
          id="titulo-galeria-preview"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Nuestra sede en imágenes
        </h2>
        <p className="text-texto-suave max-w-[700px] mb-10">
          Un vistazo a los espacios del Centro Educativo Rural Caliyaco.
        </p>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
          {FOTOS_PREVIEW.map((foto, i) => (
            <li
              key={foto.src}
              className="relative h-48 md:h-56 overflow-hidden rounded-xl group"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                loading={i === 0 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center">
          <Link
            href="/galeria"
            className="text-verde font-semibold underline underline-offset-4
              hover:text-verde-oscuro transition-colors
              focus-visible:outline-2 focus-visible:outline-verde rounded-sm"
          >
            Ver galería completa
          </Link>
        </p>
      </div>
    </section>
  );
}
