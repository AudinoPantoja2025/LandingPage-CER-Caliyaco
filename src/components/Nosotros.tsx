export default function Nosotros() {
  return (
    <section id="nosotros" className="py-20 px-6">
      <div className="max-w-[900px] mx-auto w-full">
        <h2 className="text-3xl md:text-4xl text-verde-oscuro font-bold mb-4 relative pb-3
          after:absolute after:left-0 after:bottom-0 after:w-[60px] after:h-1
          after:bg-amarillo after:rounded-full">
          Sobre nosotros
        </h2>
        <div className="grid gap-10 md:grid-cols-2 mt-10">
          <article>
            <h3 className="text-2xl text-verde-oscuro font-bold mb-4">Misión</h3>
            <div className="space-y-4 text-texto-suave leading-relaxed">
              <p>
                El Centro Educativo Rural Caliyaco cuenta con personal profesional
                idóneo, con sentido humano y de pertenencia, con capacidad de
                liderar el proceso educativo en el nivel de Preescolar y Educación
                Básica.
              </p>
              <p>
                La institución proporciona una formación incluyente de calidad,
                que considere y respete las capacidades sin discriminación de
                raza, cultura, género, ideología, credo, preferencia sexual,
                condición socioeconómica o situaciones de vulnerabilidad,
                costumbres, etnias y creencias religiosas; para que los estudiantes
                vivan en un ambiente de sana convivencia que conduzca a la
                formación integral, promoviendo el desarrollo y cuidado del medio
                ambiente.
              </p>
              <p>
                Además, nuestra misión como centro educativo es que, junto a su
                familia, posibiliten la generación de su propio proyecto de vida
                que le permita relacionarse en sociedad.
              </p>
            </div>
          </article>

          <article>
            <h3 className="text-2xl text-verde-oscuro font-bold mb-4">Visión</h3>
            <p className="text-texto-suave leading-relaxed">
              El Centro Educativo Rural Caliyaco pretende que para el año 2027 y
              en forma continua sea reconocido en el ámbito local y regional como
              Centro Educativo que forma personas, con gran calidad humana, alta
              competencia en una educación innovadora, creativa e incluyente, en
              un clima de sana convivencia, basada en valores y la excelencia
              académica, teniendo en cuenta la utilización y conservación de los
              recursos naturales.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}