/**
 * Requisitos de matrícula (Manual de Convivencia).
 * Sin documentación completa no hay matrícula; con causa justificada
 * se reserva el cupo hasta complementar los documentos.
 */
const REQUISITOS = [
  "Boletín de información académica del año aprobado o, si el año va avanzado, del periodo finalizado o notas parciales, otorgado por la institución de procedencia.",
  "Fotocopia legible del registro civil de nacimiento o documento de identidad.",
  "Fotocopia de los documentos de identificación de padres, acudientes o cuidadores.",
  "Copia del informe médico sobre condición física, psicológica o emocional, si aplica.",
  "Retiro del SIMAT de la institución educativa o centro educativo de procedencia.",
  "Firmar el libro o ficha de matrícula (padre o acudiente y estudiante), acreditando identidad, nivel académico y estado de salud.",
] as const;

export default function RequisitosMatricula() {
  return (
    <section
      id="requisitos"
      aria-labelledby="titulo-requisitos"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-[900px] mx-auto w-full">
        <h2
          id="titulo-requisitos"
          className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
            after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
            after:bg-amarillo after:rounded-full"
        >
          Requisitos de matrícula
        </h2>
        <p className="text-texto-suave max-w-[700px] mb-8">
          El ingreso como estudiante se alcanza presentando la siguiente
          documentación completa:
        </p>

        <ol className="space-y-3 list-none m-0 p-0">
          {REQUISITOS.map((requisito, i) => (
            <li
              key={requisito}
              className="flex items-start gap-4 rounded-xl border border-black/10 bg-white p-4 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full
                  bg-verde text-sm font-bold text-white"
              >
                {i + 1}
              </span>
              <p className="text-texto leading-relaxed pt-1">{requisito}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 rounded-xl bg-amarillo/15 border border-amarillo/40 p-5 text-sm text-texto leading-relaxed">
          Si falta algún documento con razón justificada, se reserva el cupo
          hasta complementar la documentación; mientras tanto, el estudiante no
          goza de los beneficios de la institución.
        </p>
      </div>
    </section>
  );
}
