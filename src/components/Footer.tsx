import Image from "next/image";
import { bandera, logo } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="bg-verde-oscuro text-white/85 text-center py-8 px-6 text-sm">
      <div className="flex items-end justify-center gap-5 mb-4">
        <Image
          src={logo}
          alt="Escudo del Centro Educativo Rural Caliyaco"
          className="h-14 w-auto object-contain"
        />
        <Image
          src={bandera}
          alt="Bandera institucional del CER Caliyaco"
          className="h-16 w-auto object-contain"
        />
      </div>
      <p>
        &copy; 2026 Centro Educativo Rural Caliyaco. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
