/**
 * Oferta de niveles de enseñanza del CER Caliyaco.
 *
 * Este módulo es la fuente única de verdad para las tarjetas de nivel de la
 * página de niveles de enseñanza. Los horarios y jornadas NO se duplican aquí:
 * viven en `NIVELES` (`@/lib/institucion`).
 *
 * TODO(datos): la oferta real de grados por sede NO está confirmada por la
 * institución. Los grados de esta lista son de REFERENCIA general del sistema
 * educativo colombiano y deben editarse aquí para publicarlos como oficiales.
 *
 * Edita `grados` en este único lugar cuando la institución confirme la oferta.
 * NO se anuncia 9.º, ni 10.º, ni 11.º, ni educación media: no hay confirmación
 * institucional de que se ofrezcan.
 */
export interface NivelOferta {
  nombre: string;
  descripcion: string;
  grados: string[];
  nota?: string;
}

export const NIVELES_OFERTA: NivelOferta[] = [
  {
    nombre: "Preescolar",
    descripcion:
      "Acompañamos los primeros pasos de la experiencia escolar, promoviendo la curiosidad, la convivencia y el desarrollo integral de cada niño y niña.",
    grados: ["Transición"],
  },
  {
    nombre: "Básica primaria",
    descripcion:
      "Fortalecemos las bases del aprendizaje, la responsabilidad, la convivencia y la curiosidad por conocer y comprender nuestro entorno.",
    grados: ["1.º", "2.º", "3.º", "4.º", "5.º"],
  },
  {
    nombre: "Básica secundaria",
    descripcion:
      "Promovemos el pensamiento crítico, la autonomía, el compromiso con el aprendizaje y el respeto por las personas y el entorno.",
    grados: ["6.º", "7.º", "8.º"],
  },
];