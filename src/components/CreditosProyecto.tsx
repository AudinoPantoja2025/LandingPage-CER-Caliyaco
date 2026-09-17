const DESARROLLADORES = [
  { nombre: "Abel Audino Pantoja Rodríguez", rol: "Estudiante desarrollador" },
  { nombre: "Kevin Alexander Chanchi López", rol: "Estudiante desarrollador" },
] as const;

const SUPERVISORES = [
  {
    nombre: "Mg. Edgar Arciniegas Erazo",
    rol: "Supervisor universitario",
  },
  {
    nombre: "Gloria del Pilar Burbano Zambrano",
    rol: "Funcionaria de la entidad",
  },
] as const;

/**
 * Sección "Acerca del proyecto": créditos oficiales del proyecto social
 * desarrollado en convenio entre la Universidad del Putumayo y el CER Caliyaco.
 */
export default function CreditosProyecto() {
  return (
    <section
      id="acerca-del-proyecto"
      aria-labelledby="titulo-acerca-proyecto"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-[900px] mx-auto w-full">
        <h2
          id="titulo-acerca-proyecto"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Acerca del proyecto
        </h2>

        <p className="text-texto-suave max-w-[700px] mb-10">
          Este sitio web fue desarrollado como parte del proyecto social de la
          Universidad del Putumayo, en convenio con el Centro Educativo Rural
          Caliyaco, con el propósito de fortalecer la presencia institucional
          y el vínculo con la comunidad educativa de la vereda Caliyaco, en
          Mocoa, Putumayo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article
            aria-labelledby="titulo-desarrolladores"
            className="bg-white rounded-xl border border-black/10 shadow-sm p-6"
          >
            <h3
              id="titulo-desarrolladores"
              className="text-lg font-semibold text-verde-oscuro mb-4"
            >
              Estudiantes desarrolladores
            </h3>
            <ul className="space-y-4">
              {DESARROLLADORES.map((persona) => (
                <li key={persona.nombre} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-amarillo"
                  />
                  <div>
                    <p className="font-semibold text-texto leading-snug">
                      {persona.nombre}
                    </p>
                    <p className="text-sm text-texto-suave">{persona.rol}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article
            aria-labelledby="titulo-supervision"
            className="bg-white rounded-xl border border-black/10 shadow-sm p-6"
          >
            <h3
              id="titulo-supervision"
              className="text-lg font-semibold text-verde-oscuro mb-4"
            >
              Supervisión institucional y académica
            </h3>
            <ul className="space-y-4">
              {SUPERVISORES.map((persona) => (
                <li key={persona.nombre} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-verde"
                  />
                  <div>
                    <p className="font-semibold text-texto leading-snug">
                      {persona.nombre}
                    </p>
                    <p className="text-sm text-texto-suave">{persona.rol}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
