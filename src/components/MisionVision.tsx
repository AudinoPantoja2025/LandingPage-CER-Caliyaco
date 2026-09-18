import Link from "next/link";
import { FILOSOFIA, MISION, VISION } from "@/lib/institucion";

const BLOQUES = [
  { titulo: "Misión", texto: MISION },
  { titulo: "Visión", texto: VISION },
  { titulo: "Filosofía", texto: FILOSOFIA },
] as const;

/**
 * Misión, Visión y Filosofía: bloque breve de identidad institucional.
 * Textos oficiales del Manual de Convivencia 2025 (versión resumida).
 */
export default function MisionVision() {
  return (
    <section
      id="identidad"
      aria-labelledby="titulo-identidad"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <h2
          id="titulo-identidad"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Nuestra identidad
        </h2>
        <p className="text-texto-suave max-w-[700px] mb-10">
          Horizonte institucional que orienta el quehacer diario del Centro
          Educativo Rural Caliyaco.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOQUES.map((bloque) => (
            <article
              key={bloque.titulo}
              className="bg-white rounded-xl border border-black/10 shadow-sm p-6
                border-t-4 border-t-amarillo"
            >
              <h3 className="text-xl font-semibold text-verde-oscuro mb-3">
                {bloque.titulo}
              </h3>
              <p className="text-sm text-texto-suave leading-relaxed">
                {bloque.texto}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8">
          <Link
            href="/nosotros"
            className="text-verde font-semibold underline underline-offset-4
              hover:text-verde-oscuro transition-colors
              focus-visible:outline-2 focus-visible:outline-verde rounded-sm"
          >
            Conocer más sobre nosotros
          </Link>
        </p>
      </div>
    </section>
  );
}
