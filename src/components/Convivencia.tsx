import { GRUPOS_CONVIVENCIA } from "@/lib/convivencia";

/**
 * Convivencia escolar: derechos y deberes por estamento en acordeones.
 * Selección didáctica; el texto oficial completo está en el Manual de
 * Convivencia del centro educativo.
 */
export default function Convivencia() {
  return (
    <section id="convivencia" aria-labelledby="titulo-convivencia" className="py-20 px-6">
      <div className="max-w-[900px] mx-auto w-full">
        <h2
          id="titulo-convivencia"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Convivencia escolar
        </h2>
        <p className="text-texto-suave max-w-[700px] mb-10">
          Derechos y deberes que regulan una convivencia pacífica, respetuosa y
          positiva. Selección de los literales más representativos del Manual
          de Convivencia.
        </p>

        <div className="space-y-6">
          {GRUPOS_CONVIVENCIA.map((grupo) => (
            <article
              key={grupo.id}
              aria-labelledby={`convivencia-${grupo.id}`}
              className="rounded-xl border border-black/10 bg-white shadow-sm overflow-hidden"
            >
              <div className="px-6 pt-6 pb-2">
                <h3
                  id={`convivencia-${grupo.id}`}
                  className="text-xl font-semibold text-verde-oscuro"
                >
                  {grupo.titulo}
                </h3>
                <p className="text-sm text-texto-suave mt-1">
                  {grupo.descripcion}
                </p>
              </div>

              <div className="p-6 pt-4 grid gap-4 md:grid-cols-2">
                <details className="group rounded-lg border border-verde/25 bg-verde/5 open:shadow-sm">
                  <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-verde-oscuro
                    flex items-center justify-between gap-2
                    focus-visible:outline-2 focus-visible:outline-verde rounded-lg">
                    <span>
                      Derechos
                      <span className="ml-2 text-xs font-medium text-texto-suave">
                        ({grupo.derechos.length})
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-xl leading-none transition-transform group-open:rotate-45 text-verde">
                      +
                    </span>
                  </summary>
                  <ul className="px-4 pb-4 space-y-2">
                    {grupo.derechos.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-texto leading-relaxed">
                        <span aria-hidden="true" className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-verde" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>

                <details className="group rounded-lg border border-amarillo/50 bg-amarillo/10 open:shadow-sm">
                  <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-verde-oscuro
                    flex items-center justify-between gap-2
                    focus-visible:outline-2 focus-visible:outline-verde rounded-lg">
                    <span>
                      Deberes
                      <span className="ml-2 text-xs font-medium text-texto-suave">
                        ({grupo.deberes.length})
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-xl leading-none transition-transform group-open:rotate-45 text-amarillo-hover">
                      +
                    </span>
                  </summary>
                  <ul className="px-4 pb-4 space-y-2">
                    {grupo.deberes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-texto leading-relaxed">
                        <span aria-hidden="true" className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-amarillo" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-texto-suave">
          Texto adaptado con fines divulgativos. El documento oficial y
          completo es el Manual de Convivencia del Centro Educativo Rural
          Caliyaco.
        </p>
      </div>
    </section>
  );
}
