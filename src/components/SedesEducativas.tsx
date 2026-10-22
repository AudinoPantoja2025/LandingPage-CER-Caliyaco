import Image from "next/image";
import Link from "next/link";
import {
  PORTADAS_SEDE,
  SEDE_DESTACADA,
  SEDES_GALERIA,
  SLUGS_COLECCION_COMPARTIDA,
  slugDeSede,
  type PortadaSede,
} from "@/lib/galeria";
import { SEDES } from "@/lib/institucion";
import GaleriaEncabezado from "./GaleriaEncabezado";
import GaleriaSelectorCategoria from "./GaleriaSelectorCategoria";
import { IconoCamara, IconoFlecha } from "./GaleriaIconos";

interface TarjetaSede {
  nombre: string;
  slug: string;
  portada: PortadaSede;
  fotos: number;
  compartida: boolean;
}

/**
 * Columnas que ocupa cada una de las siete sedes secundarias en escritorio.
 * Con la destacada (4 columnas × 2 filas) la suma cierra exactamente tres
 * filas de seis columnas: 4 + 2 + 2 + 2 + 2 + 2 + 3 + 3 = 20 celdas.
 */
const SPANS_ESCRITORIO = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

/** En tablet, la última tarjeta cierra la cuadrícula a ancho completo. */
const SPANS_TABLETA = ["", "", "", "", "", "", "md:col-span-2"];

const TAMANO_IMAGEN_DESTACADA =
  "(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 66vw";
const TAMANO_IMAGEN_SECUNDARIA =
  "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw";

function construirTarjetas(): TarjetaSede[] {
  return SEDES.map((nombre): TarjetaSede | null => {
    const slug = slugDeSede(nombre);
    if (!slug) return null;

    const grupo = SEDES_GALERIA.find((sede) => sede.slug === slug);
    const portada = PORTADAS_SEDE[nombre];
    if (!grupo || !portada) return null;

    return {
      nombre,
      slug,
      portada,
      fotos: grupo.fotos.length,
      compartida: SLUGS_COLECCION_COMPARTIDA.has(slug),
    };
  }).filter((tarjeta): tarjeta is TarjetaSede => tarjeta !== null);
}

interface TarjetaSedeProps {
  sede: TarjetaSede;
  destacada?: boolean;
  className?: string;
  retardoMs?: number;
}

function TarjetaSede({
  sede,
  destacada = false,
  className = "",
  retardoMs = 0,
}: TarjetaSedeProps) {
  return (
    <Link
      href={`/galeria/sedes-educativas/${sede.slug}`}
      aria-label={`Ver fotografías de ${sede.nombre}`}
      className={`group relative block overflow-hidden rounded-2xl bg-verde-oscuro focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde ${className}`}
    >
      <Image
        src={sede.portada.src}
        alt={sede.portada.alt}
        fill
        sizes={destacada ? TAMANO_IMAGEN_DESTACADA : TAMANO_IMAGEN_SECUNDARIA}
        priority={destacada}
        style={{ objectPosition: sede.portada.encuadre }}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
      />

      {/* Superposición institucional solo en la franja inferior. */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-verde-oscuro via-verde-oscuro/80 to-transparent ${
          destacada ? "h-[55%]" : "h-[65%]"
        }`}
      />

      <div
        style={{ animationDelay: `${retardoMs}ms` }}
        className="absolute inset-x-0 bottom-0 p-5 animate-[aparecer-sutil_0.55s_ease-out_both] motion-reduce:animate-none md:p-6"
      >
        {destacada && (
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-verde-oscuro">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-amarillo"
            />
            Sede principal
          </span>
        )}

        <h2
          className={`font-bold leading-tight text-white ${
            destacada ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
          }`}
        >
          {sede.nombre}
        </h2>

        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-white/80">
          <IconoCamara size={14} />
          {sede.fotos} fotografías
          {sede.compartida && " · Colección compartida"}
        </p>

        <span
          className="relative mt-2 inline-flex w-fit items-center gap-2 pb-1 text-sm font-semibold text-white
            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
            after:origin-left after:scale-x-0 after:rounded-full after:bg-amarillo
            after:transition-transform after:duration-300
            group-hover:after:scale-x-100
            motion-reduce:after:transition-none"
        >
          Ver fotografías
          <span
            className="text-amarillo transition-transform duration-300
              group-hover:translate-x-1
              motion-reduce:transform-none motion-reduce:transition-none"
          >
            <IconoFlecha />
          </span>
        </span>
      </div>
    </Link>
  );
}

/**
 * Vista «Sedes educativas»: encabezado compacto, selector de categorías y una
 * composición editorial con San José del Pepino como tarjeta destacada.
 */
export default function SedesEducativas() {
  const tarjetas = construirTarjetas();
  const destacada = tarjetas.find((sede) => sede.nombre === SEDE_DESTACADA);
  const secundarias = tarjetas.filter((sede) => sede !== destacada);

  return (
    <div id="galeria-sedes-educativas">
      <GaleriaEncabezado
        idTitulo="titulo-sedes-educativas"
        titulo="Nuestras sedes, nuestra comunidad"
        descripcion="Conoce las sedes que forman parte del Centro Educativo Rural Caliyaco. Explora sus espacios, descubre su entorno y conoce los lugares donde nuestra comunidad aprende y crece."
        migas={[
          { label: "Galería", href: "/galeria" },
          { label: "Sedes educativas" },
        ]}
      />

      <section
        aria-label="Sedes educativas"
        className="bg-white px-6 py-12 md:py-16"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <GaleriaSelectorCategoria activa="sedes" />
            <p className="text-sm font-medium text-texto-suave">
              {tarjetas.length} sedes
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
            {destacada && (
              <TarjetaSede
                sede={destacada}
                destacada
                className="aspect-[4/3] md:col-span-2 md:aspect-[16/10] lg:col-span-4 lg:row-span-2 lg:aspect-auto lg:h-full"
              />
            )}

            {secundarias.map((sede, i) => (
              <TarjetaSede
                key={sede.nombre}
                sede={sede}
                className={`aspect-[4/3] ${SPANS_ESCRITORIO[i] ?? ""} ${
                  SPANS_TABLETA[i] ?? ""
                }`}
                retardoMs={(i + 1) * 60}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
