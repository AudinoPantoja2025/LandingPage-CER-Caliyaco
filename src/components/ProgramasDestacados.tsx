import Link from "next/link";
import { ENFASIS, NIVELES } from "@/lib/institucion";

/**
 * Programas destacados: niveles con jornada y horario oficiales,
 * con enlace a la página de Programas.
 */
export default function ProgramasDestacados() {
  return (
    <section
      id="programas-destacados"
      aria-labelledby="titulo-programas-destacados"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <h2
          id="titulo-programas-destacados"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Programas académicos
        </h2>
        <p className="text-texto-suave max-w-[700px] mb-10">
          Énfasis en {ENFASIS}. Horarios oficiales según el Manual de
          Convivencia 2025.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none m-0 p-0">
          {NIVELES.map((nivel) => (
            <li
              key={nivel.nombre}
              className="rounded-xl border border-black/10 bg-gray-50 p-6
                transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-verde-oscuro mb-2">
                {nivel.nombre}
              </h3>
              <p className="text-sm font-medium text-texto mb-1">
                {nivel.jornada}
              </p>
              <p className="text-sm text-texto-suave">{nivel.horario}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8">
          <Link
            href="/programas"
            className="inline-block px-8 py-3 font-semibold text-base no-underline
              bg-verde text-white rounded-full transition-transform duration-300
              hover:-translate-y-[3px] hover:shadow-lg
              focus-visible:outline-2 focus-visible:outline-verde-oscuro"
          >
            Ver programas
          </Link>
        </p>
      </div>
    </section>
  );
}
