import type { ReactNode } from "react";

interface Perfil {
  id: string;
  titulo: string;
  intro: string;
  rasgos: string[];
  icono: ReactNode;
}

function Icono({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
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

/**
 * Perfiles de la comunidad educativa (Manual de Convivencia).
 * Rasgos fieles al documento, redactados de forma concisa y didáctica.
 */
const PERFILES: Perfil[] = [
  {
    id: "estudiante",
    titulo: "Perfil del estudiante",
    intro: "Orientamos al estudiante para que en un futuro sea una persona que:",
    rasgos: [
      "Esté formada integralmente en lo intelectual, crítico, creativo, social, cultural y deportivo.",
      "Sea responsable de su aprendizaje, del cumplimiento de sus deberes y del ejercicio de sus derechos.",
      "Conozca la identidad de su institución: misión, filosofía y manual de convivencia.",
      "Sea ética, con autoestima, y practique solidaridad, respeto, tolerancia, honradez y empatía.",
      "Reconozca el valor de los demás y esté abierta al diálogo y a la crítica constructiva.",
      "Sea recursiva, usando estrategias y herramientas dentro y fuera del salón de clase.",
      "Sea creativa en lengua, arte y ciencia para afrontar su realidad desde varias perspectivas.",
      "Promueva la conservación y el manejo racional de los recursos naturales.",
    ],
    icono: (
      <Icono>
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
        <path d="M22 10v6" />
      </Icono>
    ),
  },
  {
    id: "docente",
    titulo: "Perfil del docente",
    intro: "El centro educativo requiere docentes que:",
    rasgos: [
      "Estén comprometidos con la institución y su quehacer pedagógico.",
      "Practiquen los principios morales y sociales en su labor docente.",
      "Sean innovadores, creativos, solidarios y promotores del desarrollo de la comunidad.",
      "Sean investigadores, generadores de conocimiento y respetuosos del saber ancestral.",
    ],
    icono: (
      <Icono>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </Icono>
    ),
  },
  {
    id: "padres",
    titulo: "Perfil del padre de familia",
    intro: "Frente a las necesidades de la familia de hoy, padres que:",
    rasgos: [
      "Sean responsables de la formación y crianza de sus hijos y mantengan unida la familia.",
      "Sean tolerantes: ejerzan la autoridad sin maltrato físico ni verbal.",
      "Sean líderes y emprendedores que participan y apoyan las actividades institucionales.",
    ],
    icono: (
      <Icono>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </Icono>
    ),
  },
];

export default function Perfiles() {
  return (
    <div className="mt-14">
      <h3 className="text-2xl text-verde-oscuro font-bold mb-3">
        Perfiles de la comunidad
      </h3>
      <p className="text-texto-suave leading-relaxed mb-8">
        El horizonte formativo que el Manual de Convivencia propone para cada
        integrante de la comunidad educativa.
      </p>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-1">
        {PERFILES.map((perfil) => (
          <article
            key={perfil.id}
            aria-labelledby={`perfil-${perfil.id}`}
            className="rounded-xl border border-black/10 bg-white p-6 shadow-sm
              border-t-4 border-t-verde flex flex-col"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full
              bg-verde/10 text-verde-oscuro mb-4">
              {perfil.icono}
            </span>
            <h4
              id={`perfil-${perfil.id}`}
              className="text-lg font-semibold text-verde-oscuro mb-2"
            >
              {perfil.titulo}
            </h4>
            <p className="text-sm text-texto-suave mb-4">{perfil.intro}</p>
            <ul className="space-y-2.5">
              {perfil.rasgos.map((rasgo) => (
                <li key={rasgo} className="flex items-start gap-2.5 text-sm text-texto leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-amarillo"
                  />
                  {rasgo}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
