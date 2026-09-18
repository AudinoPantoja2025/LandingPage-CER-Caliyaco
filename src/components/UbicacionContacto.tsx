import Link from "next/link";
import { CONTACTO } from "@/lib/institucion";

/**
 * Ubicación y contacto rápido sin salir del inicio.
 * Mapa embebido de OpenStreetMap centrado en Mocoa, Putumayo.
 */
export default function UbicacionContacto() {
  return (
    <section
      id="ubicacion"
      aria-labelledby="titulo-ubicacion"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <h2
          id="titulo-ubicacion"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Ubicación y contacto
        </h2>
        <p className="text-texto-suave max-w-[700px] mb-10">
          Visítanos en la sede principal o comunícate con nosotros.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <address className="not-italic bg-white rounded-xl border border-black/10 shadow-sm p-6
            flex flex-col justify-center gap-3 text-texto">
            <p>
              <span className="mr-2" aria-hidden="true">📍</span>
              {CONTACTO.direccion}
            </p>
            <p>
              <span className="mr-2" aria-hidden="true">📞</span>
              Teléfono: {CONTACTO.telefono}
            </p>
            <p>
              <span className="mr-2" aria-hidden="true">✉️</span>
              Correo: {CONTACTO.correo}
            </p>
            <p>
              <span className="mr-2" aria-hidden="true">👤</span>
              Dirección: {CONTACTO.director}
            </p>
            <p className="mt-2">
              <Link
                href="/contacto"
                className="text-verde font-semibold underline underline-offset-4
                  hover:text-verde-oscuro transition-colors
                  focus-visible:outline-2 focus-visible:outline-verde rounded-sm"
              >
                Ir a la página de contacto
              </Link>
            </p>
          </address>

          <div className="overflow-hidden rounded-xl border border-black/10 shadow-sm min-h-[300px]">
            <iframe
              title="Mapa de ubicación del CER Caliyaco en Mocoa, Putumayo"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-76.70%2C1.10%2C-76.60%2C1.19&layer=mapnik&marker=1.1527%2C-76.6526"
              className="w-full h-full min-h-[300px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
