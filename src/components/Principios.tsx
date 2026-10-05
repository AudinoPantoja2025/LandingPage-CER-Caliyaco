interface Principio {
  titulo: string;
  texto: string;
}

/**
 * Principios institucionales oficiales (Manual de Convivencia).
 * Títulos didácticos propios; descripciones fieles al documento.
 */
const PRINCIPIOS: Principio[] = [
  {
    titulo: "Formación permanente",
    texto:
      "La educación como proceso de formación permanente, personal, cultural y social, fundada en la dignidad, los deberes y los derechos de la persona.",
  },
  {
    titulo: "Realidad crítica",
    texto:
      "La formación responde a las necesidades reales del medio y lleva al estudiante a buscar soluciones, organizarse, producir bienes y servicios e innovar.",
  },
  {
    titulo: "Derecho con función social",
    texto:
      "La educación es un derecho de toda persona y un servicio con función social: acceso al conocimiento, la ciencia, la tecnología y la cultura.",
  },
  {
    titulo: "Corresponsabilidad",
    texto:
      "La educación es responsabilidad del Estado, la sociedad y la familia.",
  },
  {
    titulo: "Libertad de cátedra",
    texto:
      "La educación se rige por la libertad de enseñanza, aprendizaje, investigación y cátedra.",
  },
  {
    titulo: "Investigación y consulta",
    texto:
      "El centro educativo garantiza la capacidad de investigación y de consulta.",
  },
  {
    titulo: "Igualdad e inclusión",
    texto:
      "Igualdad de los estudiantes, respetando su integridad y sus diferencias individuales.",
  },
  {
    titulo: "Democracia y diálogo",
    texto:
      "Educar en la democracia, la concertación, la tolerancia y el diálogo para una convivencia social armónica.",
  },
  {
    titulo: "Desarrollo integral",
    texto:
      "Desarrollo integral de la persona en lo psicológico, social, cultural, religioso, físico, artístico, ético y ambiental.",
  },
  {
    titulo: "Pertinencia territorial",
    texto:
      "Planes y programas en función del entorno sociocultural de cada grupo de educandos.",
  },
];

export default function Principios() {
  return (
    <div className="mt-14">
      <h3
        id="titulo-principios"
        className="text-2xl text-verde-oscuro font-bold mb-3"
      >
        Principios institucionales
      </h3>
      <p className="text-texto-suave leading-relaxed mb-8">
        Fundamentos del Manual de Convivencia que orientan cada decisión
        pedagógica del centro educativo.
      </p>

      <ol className="grid gap-5 md:grid-cols-2 list-none m-0 p-0">
        {PRINCIPIOS.map((principio, i) => (
          <li
            key={principio.titulo}
            className="flex gap-4 rounded-xl border border-black/10 bg-gray-50 p-5
              transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                bg-verde text-base font-bold text-white"
            >
              {i + 1}
            </span>
            <div>
              <h4 className="font-semibold text-verde-oscuro mb-1">
                {principio.titulo}
              </h4>
              <p className="text-sm text-texto-suave leading-relaxed">
                {principio.texto}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
