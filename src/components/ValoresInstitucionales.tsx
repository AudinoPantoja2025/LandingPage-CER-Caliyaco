interface Valor {
  nombre: string;
  descripcion: string;
  icono: React.ReactNode;
}

function IconoBase({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const VALORES: Valor[] = [
  {
    nombre: "Amor",
    descripcion:
      "Motor de la convivencia armónica y el compromiso comunitario.",
    icono: (
      <IconoBase>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </IconoBase>
    ),
  },
  {
    nombre: "Tolerancia",
    descripcion:
      "Aceptación y valoración de las diferencias en pro de la paz.",
    icono: (
      <IconoBase>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </IconoBase>
    ),
  },
  {
    nombre: "Honestidad",
    descripcion:
      "Transparencia y rectitud en cada acción escolar y personal.",
    icono: (
      <IconoBase>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </IconoBase>
    ),
  },
  {
    nombre: "Responsabilidad",
    descripcion:
      "Cumplimiento consciente de los deberes académicos y sociales.",
    icono: (
      <IconoBase>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </IconoBase>
    ),
  },
  {
    nombre: "Pertenencia",
    descripcion:
      "Orgullo y compromiso profundo por cuidar nuestra institución.",
    icono: (
      <IconoBase>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </IconoBase>
    ),
  },
  {
    nombre: "Humildad",
    descripcion:
      "Sencillez en el trato diario y apertura constante al aprendizaje.",
    icono: (
      <IconoBase>
        <path d="M12 22v-7" />
        <path d="M12 15C12 9 8 5 3 5c0 5 4 9 9 10z" />
        <path d="M12 15c0-6 4-10 9-10 0 5-4 9-9 10z" />
      </IconoBase>
    ),
  },
  {
    nombre: "Autoestima",
    descripcion:
      "Fortalecimiento de la confianza personal y el respeto propio.",
    icono: (
      <IconoBase>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </IconoBase>
    ),
  },
  {
    nombre: "Respeto",
    descripcion:
      "Reconocimiento genuino de la dignidad de los demás.",
    icono: (
      <IconoBase>
        <circle cx="12" cy="8" r="7" />
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
      </IconoBase>
    ),
  },
];

/**
 * Sección "Valores institucionales": los 8 valores oficiales del CER Caliyaco
 * en tarjetas con iconografía, grilla responsive mobile-first.
 */
export default function ValoresInstitucionales() {
  return (
    <section
      id="valores"
      aria-labelledby="titulo-valores"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <h2
          id="titulo-valores"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Valores institucionales
        </h2>

        <p className="text-texto-suave max-w-[700px] mb-10">
          Principios que orientan la formación integral de nuestra comunidad
          educativa y guían cada acción dentro y fuera de la institución.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 list-none m-0 p-0">
          {VALORES.map((valor) => (
            <li
              key={valor.nombre}
              className="bg-gray-50 rounded-xl border border-black/5 p-6
                transition-all duration-300 hover:-translate-y-1 hover:shadow-md
                hover:border-verde/30"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-full
                bg-verde/10 text-verde-oscuro mb-4">
                {valor.icono}
              </span>
              <h3 className="text-lg font-semibold text-verde-oscuro mb-2">
                {valor.nombre}
              </h3>
              <p className="text-sm text-texto-suave leading-relaxed">
                {valor.descripcion}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
