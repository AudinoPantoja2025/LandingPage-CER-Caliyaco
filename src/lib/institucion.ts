/**
 * Datos institucionales oficiales del CER Caliyaco.
 * Fuente: Manual de Convivencia Escolar 2025 (Mocoa, Putumayo).
 *
 * TODO(datos): confirmar número total de estudiantes, docentes y año de
 * fundación para ampliar la franja de cifras del inicio.
 */

export interface Nivel {
  nombre: string;
  jornada: string;
  horario: string;
}

export const SEDES = [
  "Caliyaco",
  "San Luis de Chontayaco",
  "Villa Rosa",
  "Líbano",
  "Paraíso",
  "Villanueva",
  "Guaduales",
  "San José del Pepino",
] as const;

/**
 * Niveles de enseñanza con su jornada y horario de referencia.
 */
export const NIVELES: Nivel[] = [
  {
    nombre: "Preescolar",
    jornada: "Jornada mañana",
    horario: "7:30 a. m. – 11:30 a. m.",
  },
  {
    nombre: "Básica Primaria",
    jornada: "Jornada mañana",
    horario: "7:30 a. m. – 12:30 p. m.",
  },
  {
    nombre: "Básica Secundaria",
    jornada: "Jornada única",
    horario: "6:30 a. m. – 1:30 p. m.",
  },
];

export const ENFASIS = "Ciencias Naturales y Educación Ambiental";
export const CALENDARIO = "A";
export const LEMA = "Naturaleza, ciencia y progreso";

export const MISION =
  "El Centro Educativo Rural Caliyaco brinda una educación flexible a niños, niñas, adolescentes y jóvenes de los grados: preescolar, básica y media, centrada en un clima escolar de sana convivencia con una formación integral, fundamentada en la utilización y conservación de los recursos naturales, para lograr una enseñanza de calidad académica, incluyente e innovadora.";

export const VISION =
  "Ser reconocidos en el 2030 como líderes en educación rural fundamentada en la sana convivencia, valoración, protección del medio ambiente y formación integral, garantizando a los egresados la continuidad exitosa para la educación superior.";

export const FILOSOFIA =
  "En el Centro Educativo Rural Caliyaco trabajamos por una educación que contribuya a formar para la vida. Promovemos la autonomía, la autoestima, la responsabilidad, la empatía y el respeto por las personas, la comunidad y la naturaleza. Buscamos un ambiente educativo incluyente, basado en la confianza, el buen trato y la convivencia pacífica.";

/** Datos de identificación institucional. Fuente: Manual de Convivencia 2025. */
export const IDENTIFICACION = {
  nombre: "Centro Educativo Rural Caliyaco",
  ubicacion: "Mocoa, Putumayo, Colombia",
  naturaleza: "Pública",
  caracter: "Mixto",
  enfasis: ENFASIS,
  creacion: "Decreto No. 0233 del 17 de febrero de 2003",
  codigoDANE: "286001001800",
  lema: LEMA,
} as const;

export const VALORES_INSTITUCIONALES = [
  {
    nombre: "Respeto",
    descripcion:
      "Reconocemos la dignidad de cada persona y valoramos las diferencias culturales, sociales e individuales.",
  },
  {
    nombre: "Tolerancia",
    descripcion:
      "Aceptamos y respetamos las distintas formas de ser, pensar y actuar.",
  },
  {
    nombre: "Responsabilidad",
    descripcion:
      "Cumplimos nuestros compromisos y asumimos nuestras obligaciones.",
  },
  {
    nombre: "Honradez",
    descripcion: "Actuamos con honestidad y respetamos las pertenencias ajenas.",
  },
  {
    nombre: "Sentido de pertenencia",
    descripcion:
      "Valoramos la institución, participamos en nuestra comunidad y cuidamos el entorno.",
  },
  {
    nombre: "Autoestima",
    descripcion:
      "Reconocemos nuestro valor personal y nuestras posibilidades de crecimiento.",
  },
  {
    nombre: "Amor",
    descripcion: "Cultivamos el aprecio por nosotros mismos y por los demás.",
  },
  {
    nombre: "Humildad",
    descripcion:
      "Reconocemos nuestras cualidades y las de los demás con sencillez y transparencia.",
  },
] as const;

export const CONTACTO = {
  direccion: "Vereda San José del Pepino, Mocoa – Putumayo, Colombia",
  telefono: "3144434111",
  correo: "caliyaco@sedputumayo.gov.co",
  director: "Esp. Gloria del Pilar Burbano Zambrano",
} as const;
