import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col min-h-[92vh] px-6 pt-24 sm:pt-28 pb-24
        text-center text-white overflow-hidden"
    >
      {/* Carrusel de fondo: fotos totalmente despejadas */}
      <HeroCarousel />

      {/* Nombre y lema centrados en la parte superior */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-16 sm:px-24">
        <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] leading-tight font-bold mb-3
          drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Centro Educativo Rural <span className="text-amarillo">Caliyaco</span>
        </h1>
        <p className="text-lg md:text-[1.15rem] text-white
          drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Naturaleza, ciencia y progreso
        </p>
      </div>

      {/* Botones centrados en la parte inferior del Hero */}
      <div className="relative z-10 mt-auto pt-10 flex justify-center gap-4 flex-wrap">
        <a
          href="/matriculas"
          className="inline-block px-8 py-3 font-semibold text-base no-underline
            bg-amarillo text-verde-oscuro rounded-full transition-transform duration-300
            shadow-[0_4px_16px_rgba(0,0,0,0.4)]
            hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(244,164,0,0.5)]"
        >
          Inscribirme
        </a>
        <a
          href="/nosotros"
          className="inline-block px-8 py-3 font-semibold text-base no-underline
            bg-black/30 backdrop-blur-sm text-white border-2 border-white/80 rounded-full
            transition-colors duration-300 hover:bg-black/45"
        >
          Conócenos
        </a>
      </div>
    </section>
  );
}
