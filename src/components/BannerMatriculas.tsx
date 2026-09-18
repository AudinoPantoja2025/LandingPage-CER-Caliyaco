import Link from "next/link";

/**
 * Franja de matrículas con CTA fuerte. Aprovecha la época de inscripciones.
 */
export default function BannerMatriculas() {
  return (
    <section
      aria-labelledby="titulo-matriculas-banner"
      className="bg-amarillo py-14 px-6"
    >
      <div className="max-w-[900px] mx-auto text-center">
        <h2
          id="titulo-matriculas-banner"
          className="text-3xl md:text-4xl font-bold text-verde-oscuro mb-3"
        >
          Matrículas abiertas
        </h2>
        <p className="text-verde-oscuro/80 max-w-[600px] mx-auto mb-8">
          Asegura el cupo en Preescolar, Básica Primaria o Básica Secundaria.
          Acércate a la sede principal en la vereda Caliyaco.
        </p>
        <Link
          href="/matriculas"
          className="inline-block px-10 py-3.5 font-semibold text-base no-underline
            bg-verde-oscuro text-white rounded-full transition-transform duration-300
            shadow-[0_4px_16px_rgba(0,0,0,0.25)]
            hover:-translate-y-[3px] hover:shadow-xl
            focus-visible:outline-2 focus-visible:outline-verde-oscuro"
        >
          Inscribirme ahora
        </Link>
      </div>
    </section>
  );
}
