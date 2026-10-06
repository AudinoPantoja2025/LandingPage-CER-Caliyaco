import Image from "next/image";

interface Uniforme {
  id: string;
  titulo: string;
  subtitulo: string;
  foto: string;
  alt: string;
  prendas: string[];
}

/**
 * Uniformes reglamentarios (Manual de Convivencia, sec. 4.1).
 * Fotos en public/uniformes (pendientes de aprobación: ver .gitignore).
 */
const UNIFORMES: Uniforme[] = [
  {
    id: "diario-mujer",
    titulo: "Uniforme de diario",
    subtitulo: "Mujeres",
    foto: "/uniformes/diario-mujer.webp",
    alt: "Uniforme de diario para mujeres del CER Caliyaco",
    prendas: [
      "Falda azul oscuro de pliegues.",
      "Blusa blanca con el escudo en el bolsillo izquierdo.",
      "Medias blancas largas.",
      "Zapato colegial negro.",
    ],
  },
  {
    id: "diario-hombre",
    titulo: "Uniforme de diario",
    subtitulo: "Hombres",
    foto: "/uniformes/diario-hombre.webp",
    alt: "Uniforme de diario para hombres del CER Caliyaco",
    prendas: [
      "Pantalón azul oscuro.",
      "Correa negra.",
      "Camisa blanca con el escudo en el bolsillo izquierdo.",
      "Medias blancas cañeras.",
      "Zapato colegial negro.",
    ],
  },
  {
    id: "educacion-fisica",
    titulo: "Uniforme de educación física",
    subtitulo: "Mujeres y hombres",
    foto: "/uniformes/educacion-fisica.webp",
    alt: "Uniforme de educación física del CER Caliyaco",
    prendas: [
      "Sudadera azul oscuro con dos líneas blancas a los costados.",
      "Licra azul oscuro.",
      "Camiseta blanca con el escudo en el lado izquierdo.",
      "Medias blancas tobilleras.",
      "Tenis azul.",
    ],
  },
];

export default function Uniformes() {
  return (
    <section
      id="uniformes"
      aria-labelledby="titulo-uniformes"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <h2
          id="titulo-uniformes"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Uniformes reglamentarios
        </h2>
        <p className="text-texto-suave max-w-[700px] mb-10">
          Presentación personal exigida por el Manual de Convivencia. Todo
          estudiante debe portar correctamente el uniforme y mantener una buena
          presentación personal.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none m-0 p-0">
          {UNIFORMES.map((uniforme) => (
            <li
              key={uniforme.id}
              className="rounded-xl border border-black/10 bg-gray-50 overflow-hidden
                transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-64 bg-white">
                <Image
                  src={uniforme.foto}
                  alt={uniforme.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-verde-oscuro">
                  {uniforme.titulo}
                </h3>
                <p className="text-sm font-medium text-texto-suave mb-4">
                  {uniforme.subtitulo}
                </p>
                <ul className="space-y-2">
                  {uniforme.prendas.map((prenda) => (
                    <li
                      key={prenda}
                      className="flex items-start gap-2.5 text-sm text-texto leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-verde"
                      />
                      {prenda}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 rounded-xl bg-verde/5 border border-verde/20 p-5 text-sm text-texto-suave leading-relaxed">
          <strong className="text-verde-oscuro">Parágrafo.</strong> El uso del
          uniforme respeta las condiciones físicas, médicas, psicológicas o
          emocionales de los estudiantes. En casos debidamente sustentados, la
          institución puede autorizar ajustes razonables, garantizando
          bienestar, autoestima e inclusión, sin discriminación ni afectación
          del proceso formativo.
        </p>
      </div>
    </section>
  );
}
