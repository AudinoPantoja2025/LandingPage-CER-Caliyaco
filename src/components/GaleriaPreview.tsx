import Image from "next/image";
import Link from "next/link";
import { SEDES_GALERIA } from "@/lib/galeria";

/** Una foto destacada por sede (las 4 primeras sedes). */
const FOTOS_PREVIEW = SEDES_GALERIA.slice(0, 4).map((sede) => ({
  ...sede.fotos[0],
  sede: sede.nombre,
  slug: sede.slug,
}));

/**
 * Vista previa de la galería en el inicio.
 * Toma automáticamente la primera foto de cada sede.
 */
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
          {FOTOS_PREVIEW.map((foto) => (
            <li
              key={foto.src}
              className="relative h-48 md:h-56 overflow-hidden rounded-xl group bg-gray-100"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className="absolute inset-x-0 bottom-0 px-3 py-2 text-xs font-medium text-white
                  bg-gradient-to-t from-black/70 to-transparent"
              >
                {foto.sede}
              </span>
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
