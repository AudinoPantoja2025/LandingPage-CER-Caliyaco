import Image from "next/image";
import Link from "next/link";
import { bandera, logo } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="bg-verde-oscuro text-white/85 text-center py-8 px-6 text-sm">
      <div className="max-w-[900px] mx-auto">
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

        {/* Créditos del proyecto social */}
        <div className="mt-6 border-t border-white/15 pt-5">
          <p className="font-semibold text-white mb-2">
            Proyecto social en convenio con la Universidad del Putumayo
          </p>
          <p>
            Desarrollo: Abel Audino Pantoja Rodríguez · Kevin Alexander
            Chanchi López
          </p>
          <p className="mt-1">
            Supervisión: Mg. Edgar Arciniegas Erazo · Gloria del Pilar
            Burbano Zambrano
          </p>
          <p className="mt-3">
            <Link
              href="/#acerca-del-proyecto"
              className="text-amarillo font-medium underline underline-offset-4
                hover:text-white transition-colors
                focus-visible:outline-2 focus-visible:outline-amarillo rounded-sm"
            >
              Ver créditos completos del proyecto
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
