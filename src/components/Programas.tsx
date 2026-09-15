export default function Programas() {
  return (
    <section id="programas" className="flex items-center min-h-[60vh] py-20 px-6 bg-gray-50">
      <div className="max-w-[900px] mx-auto w-full">
        <h2 className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
          after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
          after:bg-amarillo after:rounded-full">
          Programas académicos
        </h2>
        <p className="text-texto-suave max-w-[700px]">
          Preescolar, Básica Primaria y Básica Secundaria, con enfoque en
          proyectos productivos y cuidado del entorno.
        </p>
      </div>
    </section>
  );
}