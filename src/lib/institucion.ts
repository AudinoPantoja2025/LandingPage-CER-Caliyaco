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

export const NIVELES: Nivel[] = [
  {
    nombre: "Preescolar",
    jornada: "Jornada mañana",
    horario: "7:30 a. m. – 12:30 p. m.",
  },
  {
    nombre: "Básica Primaria",
    jornada: "Jornada mañana",
    horario: "7:30 a. m. – 1:30 p. m.",
  },
  {
    nombre: "Básica Secundaria",
    jornada: "Jornada única",
    horario: "6:30 a. m. – 1:25 p. m.",
  },
];

export const ENFASIS = "Ciencias Naturales y Educación Ambiental";
export const CALENDARIO = "A";
export const LEMA = "Naturaleza, ciencia y progreso";

export const MISION =
  "Brindar una formación incluyente y de calidad, sin discriminación alguna, en un ambiente de sana convivencia que conduzca a la formación integral: promoviendo el cuidado del medio ambiente y el proyecto de vida de cada estudiante junto a su familia.";

export const VISION =
  "Para 2027 y en forma continua, ser reconocidos en el ámbito local y regional por formar personas con gran calidad humana, en una educación innovadora, creativa e incluyente, basada en valores y excelencia académica, con uso y conservación de los recursos naturales.";

export const FILOSOFIA =
  "Educar para la vida: formar personas con sensibilidad social y respeto por los derechos humanos, en un ambiente de tolerancia, afecto, empatía, confianza e inclusión.";

export const CONTACTO = {
  direccion: "Vereda Caliyaco, Mocoa – Putumayo, Colombia",
  telefono: "3144434111",
  correo: "caliyaco@sedputumayo.gov.co",
  director: "Esp. Segundo Raúl Escobar Ramírez",
} as const;
