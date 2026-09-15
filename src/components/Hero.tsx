import Image from "next/image";
import { bandera, logo } from "@/lib/brand";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex items-center min-h-[88vh] pt-28 pb-20 px-6 text-center text-white
        bg-gradient-to-br from-verde to-verde-claro"
    >
      <div className="max-w-[900px] mx-auto w-full">
        <div className="flex items-end justify-center gap-5 sm:gap-8 md:gap-12 mb-8">
          <Image
            src={logo}
            alt="Escudo del Centro Educativo Rural Caliyaco"
            className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
            priority
          />
          <Image
            src={bandera}
            alt="Bandera institucional del CER Caliyaco"
            className="h-24 sm:h-32 md:h-40 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-[2.8rem] leading-tight font-bold mb-4">
          Centro Educativo Rural <span className="text-amarillo">Caliyaco</span>
        </h1>
        <p className="text-lg md:text-[1.15rem] max-w-[640px] mx-auto mb-8 text-white/92">
          Naturaleza, ciencia y progreso
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/matriculas"
            className="inline-block px-8 py-3 font-semibold text-base no-underline
              bg-amarillo text-verde-oscuro rounded-full transition-transform duration-300
              hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(244,164,0,0.5)]"
          >
            Inscribirme
          </a>
          <a
            href="/nosotros"
            className="inline-block px-8 py-3 font-semibold text-base no-underline
              bg-transparent text-white border-2 border-white/70 rounded-full
              transition-colors duration-300 hover:bg-white/12"
          >
            Conócenos
          </a>
        </div>
      </div>
    </section>
  );
}
