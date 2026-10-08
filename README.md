# CER Caliyaco

Landing page multipágina del Centro Educativo Rural Caliyaco, con sede principal en la vereda San José del Pepino, Mocoa – Putumayo, Colombia.

El sitio presenta la identidad institucional (misión, visión, filosofía y valores), cifras, programas académicos con horarios oficiales, galería fotográfica por sedes, información de matrículas, anuncios, ubicación y datos de contacto.

Fuente de datos institucionales: Manual de Convivencia Escolar (Mocoa, Putumayo).

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

Clona el repositorio, entra en la carpeta del proyecto e instala las dependencias:

```bash
npm install
```

## Desarrollo local

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia Next.js en modo desarrollo. |
| `npm run lint` | Ejecuta ESLint. |
| `npm run build` | Genera la compilación optimizada de producción. |
| `npm run start` | Inicia la aplicación compilada. |

Para ejecutar la aplicación en producción local:

```bash
npm run build
npm run start
```

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Hero con carrusel, cifras, identidad, programas, galería, matrículas, anuncios y ubicación. |
| `/nosotros` | Identificación, misión, visión, filosofía, valores, propuesta, símbolos, sedes, principios y perfiles. |
| `/niveles-de-ensenanza` | Niveles de enseñanza (antes `/programas`, con redirección permanente). |
| `/galeria` | Galería fotográfica con filtro por sede (`?sede=<slug>`) y visor en pantalla completa. |
| `/matriculas` | Pasos, documentos, preguntas frecuentes, uniformes y requisitos. |
| `/convivencia` | Derechos y deberes por estamento en acordeones. |
| `/contacto` | Teléfono, correo, ubicación y canales institucionales. |

## Funcionalidades

- **Header institucional**: logotipo, navegación por rutas, botón de Matrículas y menú móvil lateral. El enlace INICIO y el logotipo llevan al fragmento `#inicio` (sección Hero).
- **Hero con carrusel**: fotos de la sede como fondo con fundido cruzado, autoplay de 6 s (respeta `prefers-reduced-motion`), flechas, puntos indicadores y navegación por teclado.
- **Nosotros**: identificación, misión, visión, filosofía, 8 valores con iconografía, propuesta educativa, símbolos, sedes (enlazan a la galería filtrada), principios y perfiles de la comunidad.
- **Secciones del inicio**: cifras, identidad (misión/visión/filosofía), programas destacados con horarios, vista previa de galería, banner de matrículas, anuncios y ubicación con mapa.
- **Matrículas**: pasos del proceso, documentos, preguntas frecuentes, uniformes reglamentarios y requisitos oficiales.
- **Galería por sedes**: 45 fotos de 7 sedes con filtro, carga diferida y lightbox (anterior/siguiente, teclado Esc/←/→, contador y cierre al pulsar fuera).
- **Diseño responsive**: mobile-first con puntos de corte en 640 px, 900/1024 px y escritorio.

## Fotografías

Las imágenes optimizadas viven en `public/`:

```text
public/
├── brand/            # logo.png (escudo) y bandera.png
├── hero/             # fondos del carrusel (WebP, máx. 1920 px)
├── galeria/<sede>/   # fotos por sede (WebP, máx. 1280 px, NN.webp)
└── uniformes/        # fotos de uniformes (PENDIENTES de aprobación, ignoradas en .gitignore)
```

Flujo para agregar o reemplazar fotos:

1. Coloca los originales en `Originales/<Sede>/` (esta carpeta **no** se commitea).
2. Convierte a WebP (máx. 1280 px galería / 1920 px hero, calidad ~72) con `sharp` u otra herramienta.
3. Guárdalas como `NN.webp` con el siguiente consecutivo y registra el total en `src/lib/galeria.ts` (`fotosDe("<slug>", "<nombre>", total)`); aparecen automáticamente en la galería y el preview.
4. Si reemplazas una foto existente, usa un **nombre nuevo** en vez de sobrescribir: los navegadores y cachés sirven por URL y mostrarían la versión vieja.

Los textos alternativos se generan desde el nombre de la sede en `src/lib/galeria.ts`.

## Datos institucionales

Los datos editables están centralizados en `src/lib/`: `institucion.ts` (identificación, sedes, niveles con jornadas y horarios, énfasis, misión, visión, filosofía, valores y contacto), `galeria.ts` (fotos por sede), `matriculas.ts` (pasos, documentos y FAQ), `niveles.ts` y `convivencia.ts` (derechos y deberes). Los anuncios del inicio se gestionan en el arreglo `ANUNCIOS` de `src/components/Anuncios.tsx`.

## Estructura principal

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── contacto/page.tsx
│   ├── convivencia/page.tsx
│   ├── galeria/page.tsx
│   ├── matriculas/page.tsx
│   ├── niveles-de-ensenanza/page.tsx
│   └── nosotros/page.tsx
├── components/
│   ├── Anuncios.tsx
│   ├── BannerMatriculas.tsx
│   ├── CifrasInstitucionales.tsx
│   ├── Contacto.tsx
│   ├── Convivencia.tsx
│   ├── Footer.tsx
│   ├── Galeria.tsx
│   ├── GaleriaPreview.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HeroCarousel.tsx
│   ├── Lightbox.tsx
│   ├── Matriculas.tsx
│   ├── MisionVision.tsx
│   ├── NivelesEnsenanza.tsx
│   ├── Nosotros.tsx
│   ├── Perfiles.tsx
│   ├── Principios.tsx
│   ├── ProgramasDestacados.tsx
│   ├── ScrollToTop.tsx
│   ├── UbicacionContacto.tsx
│   └── Uniformes.tsx
├── hooks/
│   └── useScrollSpy.ts
└── lib/
    ├── brand.ts
    ├── convivencia.ts
    ├── galeria.ts
    ├── institucion.ts
    ├── locations.ts
    ├── matriculas.ts
    └── niveles.ts
```

## Flujo de ramas

- `master`: producción (solo recibe merges vía Pull Request).
- `feat/*` y `feature/*`: trabajo por funcionalidad, con Pull Request hacia `master`.
- Cada PR fusionado puede borrar su rama para mantener el repositorio limpio.

## Despliegue

Despliegue recomendado en **Vercel** (soporte nativo de Next.js y optimización de imágenes incluida en el plan gratuito): conecta el repositorio de GitHub, usa la rama `master` como producción y cada Pull Request genera una vista previa automática.

## Tecnologías

- Next.js 16 con App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- sharp (optimización de imágenes)

## Variables de entorno

Actualmente el proyecto no requiere variables de entorno para ejecutarse. Si se agregan en el futuro, utiliza un archivo local `.env.local` y no lo subas al repositorio. La plantilla pública puede mantenerse en `.env.example`.
