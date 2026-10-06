import Link from "next/link";
import { CONTACTO } from "@/lib/institucion";
import { PASOS_MATRICULA, DOCUMENTOS_MATRICULA, PREGUNTAS_FRECUENTES } from "@/lib/matriculas";

/**
 * Página informativa de «Matrículas» del CER Caliyaco.
 */
export default function Matriculas() {
  const TELEFONO_E164 = `+57${CONTACTO.telefono}`;
  const CORREO = CONTACTO.correo;

  return (
    <div id="matriculas" className="matriculas-scope">
      {/* Selección de texto tematizada desde la paleta, acotada a esta página */}
      <style>{`
        .matriculas-scope ::selection {
          background-color: var(--color-verde);
          color: #fff;
        }
      `}</style>

      {/* ── PAGE HEADER ── */}
      <section
        aria-labelledby="matriculas-titulo"
        className="py-20 px-6 bg-verde-oscuro text-white"
      >
        <div className="max-w-[900px] mx-auto w-full">
          <h1
            id="matriculas-titulo"
            className="text-3xl md:text-5xl font-bold leading-tight mb-4 mt-8 text-balance"
          >
            Haz parte de la comunidad educativa
          </h1>
          <p className="text-white/80 text-lg font-medium max-w-[720px] leading-relaxed mb-6">
            En el Centro Educativo Rural Caliyaco trabajamos por la formación
            integral, el aprendizaje, la sana convivencia y el respeto por la
            naturaleza.
          </p>
          <p className="text-white/75 leading-relaxed max-w-[720px]">
            Si deseas conocer nuestra oferta educativa o consultar el proceso de
            matrícula, comunícate con la institución. Te orientaremos sobre los
            niveles disponibles, las sedes, los cupos y la documentación
            correspondiente.
          </p>
        </div>
      </section>

      {/* ── PASOS ── */}
      <section aria-labelledby="pasos-titulo" className="py-16 px-6 bg-white">
        <div className="max-w-[900px] mx-auto w-full">
          <h2
            id="pasos-titulo"
            className="text-2xl md:text-3xl text-verde-oscuro font-bold mb-4 relative pb-3
              after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px]
              after:bg-amarillo after:rounded-full"
          >
            Proceso de matrícula
          </h2>
          <p className="text-texto-suave leading-relaxed max-w-[70ch] mb-10">
            Te guiamos paso a paso para que tengas claro cómo adelantar el
            proceso. Recuerda que estos pasos son orientativos y el trámite se
            realiza de manera presencial con la institución.
          </p>

          <ol className="grid gap-5 md:grid-cols-2 list-none m-0 p-0">
            {PASOS_MATRICULA.map((paso, i) => (
              <li
                key={paso.titulo}
                className="flex gap-4 rounded-xl border border-black/10 bg-gray-50 p-5
                  transition-[transform,box-shadow] duration-300 ease-out
                  hover:-translate-y-0.5 hover:shadow-md
                  motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                    bg-verde text-white font-bold text-base"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-verde-oscuro mb-1">
                    {paso.titulo}
                  </h3>
                  <p className="text-sm text-texto-suave leading-relaxed">
                    {paso.texto}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── DOCUMENTOS ── */}
      <section aria-labelledby="documentos-titulo" className="py-16 px-6 bg-gray-50">
        <div className="max-w-[900px] mx-auto w-full">
          <h2
            id="documentos-titulo"
            className="text-2xl md:text-3xl text-verde-oscuro font-bold mb-4 relative pb-3
              after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px]
              after:bg-amarillo after:rounded-full"
          >
            Documentos para la matrícula
          </h2>
          <p className="text-texto-suave leading-relaxed max-w-[70ch] mb-10">
            El Manual de Convivencia 2025 enumera los siguientes documentos para
            el proceso de ingreso. Confirma con la institución la lista vigente y
            las indicaciones específicas antes de presentar la documentación.
          </p>

          <ul className="grid gap-4 md:grid-cols-2 list-none m-0 p-0">
            {DOCUMENTOS_MATRICULA.map((doc) => (
              <li
                key={doc.titulo}
                className="rounded-xl border border-black/10 bg-white p-5
                  transition-[transform,border-color] duration-200 ease-out
                  hover:-translate-y-0.5 hover:border-verde/30
                  motion-reduce:transform-none motion-reduce:transition-none"
              >
                <h3 className="font-semibold text-verde-oscuro mb-1">
                  {doc.titulo}
                </h3>
                <p className="text-sm text-texto-suave leading-relaxed">
                  {doc.descripcion}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-titulo" className="py-16 px-6 bg-white">
        <div className="max-w-[900px] mx-auto w-full">
          <h2
            id="faq-titulo"
            className="text-2xl md:text-3xl text-verde-oscuro font-bold mb-4 relative pb-3
              after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px]
              after:bg-amarillo after:rounded-full"
          >
            Preguntas frecuentes
          </h2>
          <p className="text-texto-suave leading-relaxed max-w-[70ch] mb-10">
            Resuelve las dudas más comunes sobre el proceso de matrícula y
            encuentra el canal adecuado para cada consulta.
          </p>

          <div className="flex flex-col gap-4">
            {PREGUNTAS_FRECUENTES.map((faq) => (
              <details
                key={faq.pregunta}
                className="group rounded-xl border border-black/10 bg-gray-50
                  transition-colors duration-200 hover:border-verde/30 open:bg-white"
              >
                <summary
                  className="flex items-center justify-between gap-4 cursor-pointer list-none
                    px-6 py-5 font-semibold text-verde-oscuro
                    focus-visible:outline-2 focus-visible:outline-verde-oscuro rounded-xl
                    [&::-webkit-details-marker]:hidden"
                >
                  <span>{faq.pregunta}</span>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full
                      bg-verde/10 text-verde-oscuro transition-transform duration-300
                      group-open:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-texto-suave leading-relaxed">
                  {faq.respuesta}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-labelledby="matriculas-cta-titulo" className="py-16 px-6 bg-gray-50">
        <div className="max-w-[900px] mx-auto w-full">
          <h2 id="matriculas-cta-titulo" className="sr-only">
            Continúa con tu consulta
          </h2>
          <div className="rounded-2xl bg-verde p-8 sm:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-balance">
              ¿Tienes dudas sobre la matrícula?
            </h3>
            <p className="text-white/85 leading-relaxed max-w-[60ch] mb-8">
              Comunícate con nosotros para consultar los grados disponibles, los
              cupos, la sede y la documentación vigente.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href={`tel:${TELEFONO_E164}`}
                className="inline-block px-8 py-3 text-center font-semibold text-base no-underline
                  bg-white text-verde-oscuro rounded-full
                  transition-[transform,box-shadow] duration-300 ease-out
                  hover:-translate-y-[3px] hover:shadow-lg
                  focus-visible:outline-2 focus-visible:outline-white
                  motion-reduce:transform-none motion-reduce:transition-none"
              >
                Llamar a la institución
              </a>
              <a
                href={`mailto:${CORREO}`}
                className="inline-block px-8 py-3 text-center font-semibold text-base no-underline
                  bg-white/10 text-white border border-white/30 rounded-full
                  transition-colors duration-300 ease-out
                  hover:bg-white/20
                  focus-visible:outline-2 focus-visible:outline-white
                  motion-reduce:transition-none"
              >
                Enviar correo
              </a>
              <Link
                href="/niveles-de-ensenanza"
                className="inline-block px-8 py-3 text-center font-semibold text-base no-underline
                  text-white underline underline-offset-4 decoration-white/60
                  transition-colors duration-200 hover:text-white/85
                  focus-visible:outline-2 focus-visible:outline-white rounded-sm"
              >
                Ver niveles de enseñanza
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
