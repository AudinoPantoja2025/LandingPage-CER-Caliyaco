const CIFRAS = [
  { valor: "8", etiqueta: "Sedes rurales en Mocoa" },
  { valor: "3", etiqueta: "Niveles: Preescolar, Primaria y Secundaria" },
  { valor: "A", etiqueta: "Calendario académico" },
  { valor: "Única", etiqueta: "Jornada en secundaria" },
] as const;

/**
 * Franja de cifras institucionales: credibilidad inmediata tras el Hero.
 * Datos confirmados en el Manual de Convivencia 2025.
 */
export default function CifrasInstitucionales() {
  return (
    <section
      aria-label="Cifras institucionales"
      className="bg-verde-oscuro text-white py-12 px-6"
    >
      <dl className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center list-none">
        {CIFRAS.map((cifra) => (
          <div key={cifra.etiqueta} className="flex flex-col items-center gap-1">
            <dd className="text-4xl md:text-5xl font-bold text-amarillo order-first">
              {cifra.valor}
            </dd>
            <dt className="text-sm text-white/85 max-w-[220px]">
              {cifra.etiqueta}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
