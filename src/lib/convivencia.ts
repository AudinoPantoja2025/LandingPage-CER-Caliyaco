/**
 * Derechos y deberes por estamento (Manual de Convivencia).
 * Selección didáctica de los literales más representativos; el texto
 * completo y oficial está en el Manual de Convivencia del centro educativo.
 */

export interface GrupoConvivencia {
  id: string;
  titulo: string;
  descripcion: string;
  derechos: string[];
  deberes: string[];
}

export const GRUPOS_CONVIVENCIA: GrupoConvivencia[] = [
  {
    id: "estudiantes",
    titulo: "Estudiantes",
    descripcion: "Derechos que los protegen y deberes que los forman.",
    derechos: [
      "Recibir una formación integral acorde con el PEI.",
      "Recibir un trato cortés y amable, sin discriminación alguna.",
      "Ser escuchados y contar con el debido proceso según el conducto regular.",
      "Conocer sus informes académicos y solicitar revisión ante el docente.",
      "Recibir orientación y asesorías con los recursos del centro educativo.",
      "Solicitar el PIAR en caso de presentar alguna discapacidad.",
      "Ser evaluados de forma integral, según su ritmo y características.",
      "Participar en actividades culturales, deportivas y de investigación.",
      "Elegir y ser elegidos en el gobierno escolar.",
      "Recibir estímulos y reconocimientos cuando los merezcan.",
    ],
    deberes: [
      "Usar un lenguaje respetuoso, sin vulgaridades ni discriminación.",
      "Tratar a compañeros y comunidad con amabilidad y respeto.",
      "Respetar los bienes ajenos, pedir permiso y agradecer.",
      "Respetar creencias, dignidad, intimidad y opiniones de todos.",
      "Cumplir el Manual de Convivencia y los reglamentos internos.",
      "Cumplir puntualmente el horario y permanecer en las actividades.",
      "Participar activamente en clase respetando las opiniones.",
      "Cuidar útiles, equipos y mobiliario; responder por daños causados.",
      "Participar responsablemente en el gobierno escolar.",
      "Justificar inasistencias y ponerse al día académicamente.",
      "Portar correctamente el uniforme y mantener buena presentación.",
      "Defender y preservar los recursos naturales.",
      "Respetar los símbolos patrios e institucionales.",
      "No portar armas u objetos cortopunzantes ni consumir alimentos en clase.",
    ],
  },
  {
    id: "padres",
    titulo: "Padres de familia",
    descripcion: "Corresponsables de la formación junto al centro educativo.",
    derechos: [
      "Ser atendidos por directivos, docentes y personal de la comunidad.",
      "Participar en el consejo directivo y demás grupos de la comunidad.",
      "Que sus hijos reciban igual trato, sin distinción ni discriminación.",
      "Recibir un trato respetuoso de todos los miembros de la comunidad.",
      "Recibir información oportuna del rendimiento académico de sus hijos.",
      "Proponer ideas para mejorar las actividades programadas.",
      "Presentar reclamos de forma justa y respetuosa.",
      "Conocer el Manual de Convivencia y el PEI.",
      "Recibir orientación y capacitación a través de la escuela de padres.",
    ],
    deberes: [
      "Matricular a sus hijos y cumplir los compromisos adquiridos.",
      "No enviar a los estudiantes enfermos a la institución.",
      "Participar en el consejo de padres, directivo y comités.",
      "Informarse del rendimiento y comportamiento de sus hijos.",
      "Acompañar el proceso formativo como primeros educadores.",
      "Brindar en el hogar un ambiente adecuado y los útiles necesarios.",
      "Cumplir los requisitos exigidos (registro civil, EPS y demás).",
      "Enviar a sus hijos puntuales, aseados y justificar ausencias por escrito.",
      "Respetar las diferencias físicas, intelectuales, religiosas y culturales.",
      "Responder por los daños que el estudiante ocasione.",
    ],
  },
  {
    id: "docentes",
    titulo: "Docentes",
    descripcion: "Quienes lideran el proceso educativo con idoneidad y humanidad.",
    derechos: [
      "Ser respetados como personas, sin distinción alguna.",
      "Recibir capacitación y actualización permanente.",
      "Ser estimulados individual y públicamente por sus méritos.",
      "Ser escuchados con neutralidad antes de ser juzgados.",
      "Solicitar permisos y licencias conforme a la ley.",
      "Usar los materiales para el desarrollo del aprendizaje.",
      "Elegir y ser elegidos en el Consejo Directivo y comisiones.",
      "Recibir trato imparcial y vacaciones según la ley.",
      "Ser evaluados de forma objetiva y transparente.",
    ],
    deberes: [
      "Reportar a padres o acudientes si el estudiante presenta síntomas de salud.",
      "Cumplir las obligaciones estatutarias y la jornada laboral.",
      "Participar en el planeamiento, el PEI y las actividades programadas.",
      "Programar, orientar y evaluar las actividades curriculares.",
      "Atender a los padres de familia de forma oportuna.",
      "Responder por equipos y materiales a su cargo.",
      "Rendir informes académicos periódicos (boletines).",
      "Mantener buenas relaciones humanas y de tolerancia.",
      "Actuar con honestidad y tratar con equidad a los estudiantes.",
      "Preparar clases, talleres y evaluaciones con ética y responsabilidad.",
      "Hacer clases creativas y participativas, sin celular personal en clase.",
      "Cooperar en la conservación de los recursos naturales.",
      "Activar la ruta de atención según el tipo de situación.",
    ],
  },
];
