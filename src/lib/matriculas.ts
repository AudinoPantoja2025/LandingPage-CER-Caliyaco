/**
 * Contenido orientativo de la página «Matrículas» (CER Caliyaco).
 */

export interface PasoMatricula {
  titulo: string;
  texto: string;
}

export interface DocumentoMatricula {
  titulo: string;
  descripcion: string;
}

export interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string;
}

/** Pasos orientativos del proceso, secuenciales */
export const PASOS_MATRICULA: PasoMatricula[] = [
  {
    titulo: "Consulta la oferta educativa",
    texto:
      "Identifica el nivel y la sede de tu interés. Confirma con la institución los grados que están disponibles y si hay cupos.",
  },
  {
    titulo: "Prepara la documentación",
    texto:
      "Revisa los documentos de ingreso que se mencionan en esta página y consulta cuáles aplican a tu caso.",
  },
  {
    titulo: "Diligencia el formato institucional",
    texto:
      "Solicita a la institución el formato de inscripción y matrícula y sigue las indicaciones vigentes para entregarlo junto con los documentos requeridos.",
  },
  {
    titulo: "Formaliza la matrícula",
    texto:
      "La matrícula se formaliza con la firma del estudiante y de su padre, madre o acudiente, así como el compromiso de conocer y cumplir las normas institucionales.",
  },
];

/** Documentos de ingreso citados en el manual */
export const DOCUMENTOS_MATRICULA: DocumentoMatricula[] = [
  {
    titulo: "Boletín o informe académico",
    descripcion:
      "Del año aprobado o del periodo académico cursado en la institución de procedencia, según corresponda.",
  },
  {
    titulo: "Documento de identidad del estudiante",
    descripcion:
      "Copia legible del registro civil de nacimiento o documento de identidad.",
  },
  {
    titulo: "Documentos de los padres, acudientes o cuidadores",
    descripcion: "Copias de sus documentos de identificación.",
  },
  {
    titulo: "Retiro del SIMAT",
    descripcion:
      "Documento o constancia correspondiente de la institución educativa de procedencia.",
  },
  {
    titulo: "Formato de inscripción y matrícula",
    descripcion: "Diligenciado según las indicaciones institucionales.",
  },
  {
    titulo: "Información médica pertinente",
    descripcion:
      "El manual la menciona cuando corresponda a la condición física, psicológica o emocional del estudiante. Consulta con la institución los casos en los que aplique.",
  },
  {
    titulo: "Soportes relacionados con discapacidad y ajustes razonables",
    descripcion:
      "Cuando corresponda, como el PIAR, certificados o reportes. La familia debe consultar con la institución la documentación aplicable y los apoyos pertinentes.",
  },
];

/** Preguntas frecuentes */
export const PREGUNTAS_FRECUENTES: PreguntaFrecuente[] = [
  {
    pregunta: "¿Cómo puedo consultar si hay cupos disponibles?",
    respuesta:
      "Comunícate con la institución para confirmar la disponibilidad en el nivel y la sede de tu interés.",
  },
  {
    pregunta: "¿Qué documentos necesito para matricular a mi hijo o hija?",
    respuesta:
      "Consulta la lista de esta página y confirma con la institución los requisitos vigentes y los documentos que aplican a tu caso.",
  },
  {
    pregunta: "¿En qué sede puedo estudiar?",
    respuesta:
      "El Centro Educativo Rural Caliyaco registra las sedes Caliyaco, San Luis de Chontayaco, Villa Rosa, Líbano, Paraíso, Villanueva, Guaduales y San José del Pepino. Comunícate con la institución para confirmar en cuál se ofrece el nivel que necesitas.",
  },
  {
    pregunta: "¿Cómo puedo comunicarme con la institución?",
    respuesta:
      "Puedes llamar al 314 443 4111 o escribir a caliyaco@sedputumayo.gov.co.",
  },
];
