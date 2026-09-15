"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { bandera, logo } from "@/lib/brand";

const ENLACES = [
  { ruta: "/", etiqueta: "Inicio" },
  { ruta: "/nosotros", etiqueta: "Nosotros" },
  { ruta: "/programas", etiqueta: "Programas" },
  { ruta: "/galeria", etiqueta: "Galería" },
  { ruta: "/contacto", etiqueta: "Contacto" },
] as const;

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [headerCompacto, setHeaderCompacto] = useState(false);
  const rutaActual = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const cerrarMenu = useCallback(() => setMenuAbierto(false), []);
  const alternarMenu = () => setMenuAbierto((prev) => !prev);

  /* Cerrar con tecla Escape y con clic fuera del menú */
  useEffect(() => {
    if (!menuAbierto) return;

    const manejarTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrarMenu();
    };

    const manejarClicFuera = (e: MouseEvent | TouchEvent) => {
      const dentroNav = navRef.current?.contains(e.target as Node);
      const dentroToggle = toggleRef.current?.contains(e.target as Node);
      if (!dentroNav && !dentroToggle) cerrarMenu();
    };

    document.addEventListener("keydown", manejarTecla);
    document.addEventListener("mousedown", manejarClicFuera);
    document.addEventListener("touchstart", manejarClicFuera);

    return () => {
      document.removeEventListener("keydown", manejarTecla);
      document.removeEventListener("mousedown", manejarClicFuera);
      document.removeEventListener("touchstart", manejarClicFuera);
    };
  }, [menuAbierto, cerrarMenu]);

  /* Header compacto al hacer scroll */
  useEffect(() => {
    const manejarScroll = () => setHeaderCompacto(window.scrollY > 50);
    manejarScroll();
    window.addEventListener("scroll", manejarScroll, { passive: true });
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  /* Bloquear el scroll del body cuando el menú móvil está abierto */
  useEffect(() => {
    if (!menuAbierto) return;
    const bodyAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = bodyAnterior;
    };
  }, [menuAbierto]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 bg-verde z-50 transition-shadow duration-300 ${
        headerCompacto ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="max-w-[1200px] h-full mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Identidad institucional */}
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline text-white min-w-0"
          aria-label="CER Caliyaco - Inicio"
          onClick={cerrarMenu}
        >
          <Image
            src={logo}
            alt="Escudo del Centro Educativo Rural Caliyaco"
            className="h-14 w-auto object-contain drop-shadow-sm shrink-0"
            priority
          />
          <span className="flex flex-col leading-tight min-w-0">
            <strong className="text-base sm:text-lg font-bold tracking-[0.3px] truncate">
              CER Caliyaco
            </strong>
            <small className="text-xs font-normal text-white/85 hidden sm:block">
              Educación con calidad
            </small>
          </span>
        </Link>

        <div className="flex items-center gap-2 lg:hidden">
          <Image
            src={bandera}
            alt="Bandera institucional del CER Caliyaco"
            className="h-12 w-auto object-contain drop-shadow-sm"
            priority
          />
          {/* Botón hamburguesa (móvil) */}
          <button
            ref={toggleRef}
            type="button"
            className={`flex flex-col justify-center gap-[5px] w-11 h-11 p-2.5 bg-transparent border-none rounded-lg cursor-pointer z-[60] transition-transform ${
              menuAbierto ? "rotate-90" : ""
            }`}
            aria-label={menuAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={menuAbierto}
            aria-controls="menu-navegacion"
            onClick={alternarMenu}
          >
            <span
              className={`block w-full h-[3px] bg-white rounded transition-all duration-300 ${
                menuAbierto ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-full h-[3px] bg-white rounded transition-all duration-300 ${
                menuAbierto ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-[3px] bg-white rounded transition-all duration-300 ${
                menuAbierto ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Navegación */}
        <nav
          ref={navRef}
          id="menu-navegacion"
          aria-label="Navegación principal"
          className={`fixed lg:static top-0 right-0 h-screen lg:h-auto w-[min(300px,80vw)] lg:w-auto
            bg-verde-oscuro lg:bg-transparent
            flex flex-col lg:flex-row items-stretch lg:items-center gap-6 lg:gap-6
            py-[88px] lg:py-0 px-6 lg:px-0
            shadow-[-4px_0_20px_rgba(0,0,0,0.3)] lg:shadow-none
            transition-transform duration-300 ease-in-out z-50
            translate-x-full lg:translate-x-0
            ${menuAbierto ? "translate-x-0" : ""}`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-1 list-none m-0 p-0">
            {ENLACES.map((enlace) => {
              const activo = rutaActual === enlace.ruta;
              return (
                <li key={enlace.ruta}>
                  <Link
                    href={enlace.ruta}
                    onClick={cerrarMenu}
                    aria-current={activo ? "true" : undefined}
                    className={`relative block lg:inline-block py-3.5 lg:py-2 px-3 text-white/92 lg:text-white/92
                      font-medium text-[0.95rem] lg:text-[0.95rem] rounded-md
                      transition-colors duration-300 hover:text-white hover:bg-white/10
                      lg:after:absolute lg:after:left-3 lg:after:right-3 lg:after:bottom-[6px]
                      lg:after:h-[2px] lg:after:bg-amarillo lg:after:rounded-full
                      lg:after:transition-transform lg:after:duration-300
                      lg:after:origin-left lg:hover:after:scale-x-100
                      ${
                        activo
                          ? "text-white bg-white/10 after:scale-x-100"
                          : "after:scale-x-0"
                      }`}
                  >
                    {enlace.etiqueta}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Image
            src={bandera}
            alt="Bandera institucional del CER Caliyaco"
            className="hidden lg:block h-14 w-auto object-contain drop-shadow-sm"
          />

          {/* Botón de acción (CTA) */}
          <Link
            href="/matriculas"
            onClick={cerrarMenu}
            className="block text-center py-2.5 px-5 bg-amarillo text-verde-oscuro
              font-semibold text-sm rounded-full whitespace-nowrap
              transition-transform duration-300 hover:-translate-y-0.5
              hover:shadow-[0_4px_14px_rgba(244,164,0,0.5)]"
          >
            Matrículas 2026
          </Link>
        </nav>
      </div>
    </header>
  );
}