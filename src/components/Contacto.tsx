const DATOS_CONTACTO = [
  { icono: "📞", texto: "Teléfono: 3144434111" },
  { icono: "✉️", texto: "Correo: caliyaco@sedputumayo.gov.co" },
  { icono: "📍", texto: "Vereda Caliyaco, Mocoa - Putumayo Colombia" },
] as const;

export default function Contacto() {
  return (
    <section id="contacto" className="flex items-center min-h-[60vh] py-20 px-6">
      <div className="max-w-[900px] mx-auto w-full">
        <h2 className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
          after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
          after:bg-amarillo after:rounded-full">
          Contacto
        </h2>
        <p className="text-texto-suave max-w-[700px] mb-4">
          Comunícate con nosotros para mayor información.
        </p>
        <address className="not-italic">
          {DATOS_CONTACTO.map((dato) => (
            <p key={dato.texto} className="mb-2 text-texto">
              <span className="mr-2" aria-hidden="true">
                {dato.icono}
              </span>
              {dato.texto}
            </p>
          ))}
        </address>
      </div>
    </section>
  );
}