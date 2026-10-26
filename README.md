# CER Caliyaco

Landing page multipágina del **Centro Educativo Rural Caliyaco**, institución educativa pública rural con sede principal en la vereda San José del Pepino, Mocoa – Putumayo, Colombia.

El sitio presenta la identidad institucional (misión, visión, filosofía, valores y principios), cifras, niveles de enseñanza con jornadas y horarios, galería fotográfica por sedes y por categorías culturales/deportivas, información de matrículas, convivencia escolar, anuncios, ubicación y datos de contacto.

Fuente de los datos institucionales: **Manual de Convivencia Escolar 2025**.

## Estado actual

- **11 rutas de página**, **33 componentes**, **9 módulos de datos** en `src/lib`.
- **Sitio estático**: no hay backend, API, base de datos, autenticación, formularios funcionales ni envío de datos. Todo el contenido se resuelve en build time.
- Las únicas partes interactivas son componentes de cliente con estado local: menú móvil, carrusel del hero, visores de fotos y acordeones nativos.

## Requisitos

- Node.js **20.9 o superior** (mínimo que exige Next.js 16)
- npm

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia Next.js en modo desarrollo. |
| `npm run lint` | Ejecuta ESLint (flat config con `core-web-vitals` y TypeScript). |
| `npm run build` | Genera la compilación optimizada de producción. |
| `npm run start` | Sirve la aplicación compilada. |

Para ejecutar la aplicación en producción local:

```bash
npm run build
npm run start
```

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Hero con carrusel, cifras, identidad, programas destacados, vista previa de galería, banner de matrículas, anuncios y ubicación. |
| `/nosotros` | Identificación, misión, visión, filosofía, valores, propuesta educativa, símbolos, sedes, principios y perfiles de la comunidad. |
| `/niveles-de-ensenanza` | Oferta por nivel, jornadas y horarios oficiales. `/programas` redirige aquí de forma permanente (308). |
| `/galeria` | Portada de la galería con dos categorías: Sedes educativas y Cultura y deporte. |
| `/galeria/sedes-educativas` | Grid editorial de las 8 sedes del CER. |
| `/galeria/sedes-educativas/[slug]` | Fotos de una sede con visor ampliado. Son 7 slugs: Líbano y Villa Rosa comparten colección fotográfica. |
| `/galeria/cultura-y-deporte` | Portada de las categorías Cultura y Deporte. |
| `/galeria/cultura-y-deporte/[categoria]` | Cultura: vista editorial del «Encuentro de expresiones culturales» (9 fotos + visor). Deporte: estado vacío intencional mientras no existan fotos reales. |
| `/matriculas` | Pasos, documentos, preguntas frecuentes, uniformes y requisitos. |
| `/convivencia` | Derechos y deberes por estamento en acordeones nativos. |
| `/contacto` | Teléfono, correo, ubicación y canales institucionales. |

Además se generan `robots.txt` y `sitemap.xml` mediante la Metadata API de Next.

Las rutas dinámicas se construyen en build con `generateStaticParams` y `dynamicParams = false`: un slug o categoría inexistente responde **404**.

## Funcionalidades

- **Header institucional**: logotipo, navegación por rutas, botón de Matrículas y menú móvil lateral. El enlace Inicio y el logotipo llevan al fragmento `#inicio` del hero.
- **Hero con carrusel**: 13 diapositivas (6 de `public/hero` y 7 de la galería) con fundido cruzado, autoplay de 6 s, pausa, flechas, puntos indicadores y navegación por teclado. Respeta `prefers-reduced-motion`.
- **Nosotros**: identificación, misión, visión, filosofía, 8 valores con iconografía, propuesta educativa, símbolos, sedes (enlazan a su galería), principios y perfiles de la comunidad.
- **Niveles de enseñanza**: tarjetas por nivel, tabla de jornadas y horarios, y advertencia de que la jornada puede variar según la sede.
- **Galería**: portada de dos categorías, grid de sedes con tarjeta destacada y vista editorial del encuentro cultural.
- **Visor de fotos**: lightbox con anterior/siguiente, teclado (`Esc`, `←`, `→`), contador, cierre al pulsar fuera y retorno de foco a la miniatura.
- **Matrículas**: pasos del proceso, documentos, preguntas frecuentes, uniformes reglamentarios y requisitos oficiales.
- **Convivencia**: derechos y deberes por estamento con `<details>/<summary>` nativos (sin JavaScript).
- **Diseño responsive**: mobile-first con puntos de corte en 640 px (`sm`), 768 px (`md`) y 1024 px (`lg`).

## Arquitectura

El proyecto usa **Next.js App Router** con **Server Components por defecto**:

```text
RootLayout (servidor)
├── <html lang="es-CO"> + fuente Poppins (next/font/google)
├── <JsonLd />      JSON-LD global (schema.org)
├── <Header />      cliente: menú, scroll y ruta activa
├── <main />        contenido de la página
└── <Footer />      servidor
```

Solo **5 componentes** usan `"use client"`:

| Componente | Motivo |
| --- | --- |
| `Header.tsx` | Menú móvil, `usePathname`, listeners de scroll/teclado/clic y bloqueo de scroll. |
| `HeroCarousel.tsx` | Autoplay, índice, pausa y teclado. |
| `GaleriaFotosVisor.tsx` | Índice del visor y retorno de foco. |
| `Lightbox.tsx` | Diálogo modal, teclado, foco atrapado y bloqueo de scroll. |
| `ScrollToTop.tsx` | Restauración de scroll al montar. |

No hay `fetch`, Route Handlers ni Server Actions. Los datos entran por imports estáticos desde `src/lib` o por constantes locales del componente.

`next.config.ts` declara:

- **Cabeceras de seguridad** para todas las rutas: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` y `Permissions-Policy`.
- **Redirección permanente** de `/programas` a `/niveles-de-ensenanza`.

## Capa de datos (`src/lib`)

Los datos editables están centralizados en `src/lib`:

| Módulo | Contenido |
| --- | --- |
| `institucion.ts` | Identificación, `SEDES` (8), `NIVELES` (3) con jornadas y horarios, énfasis, calendario, lema, misión, visión, filosofía, valores y contacto. |
| `galeria.ts` | Grupos fotográficos por sede, portadas, sede destacada, categorías de navegación y portada de la galería. |
| `culturaDeporte.ts` | Categorías Cultura y Deporte, colección del encuentro cultural y textos de estado vacío. |
| `niveles.ts` | Oferta académica por nivel (sin duplicar horarios). |
| `matriculas.ts` | Pasos, documentos y preguntas frecuentes. |
| `convivencia.ts` | Grupos de derechos y deberes. |
| `locations.ts` | Diapositivas del carrusel del hero. |
| `seo.ts` | `SITE_URL`, `SITE_NAME` y `paginaMetadata()`. |
| `brand.ts` | Imports estáticos del logo y la bandera. |

Los datos que no son de dominio viven en el propio componente: anuncios (`Anuncios.tsx`), cifras (`CifrasInstitucionales.tsx`), principios (`Principios.tsx`), perfiles (`Perfiles.tsx`) y uniformes (`Uniformes.tsx`).

## Galería

- **Sedes**: 45 fotos distribuidas en 7 grupos (Caliyaco 2, San Luis de Chontayaco 6, Guaduales 7, Líbano–Villa Rosa 7, Paraíso 6, San José del Pepino 10, Villanueva 7).
- **8 sedes, 7 colecciones**: Líbano y Villa Rosa comparten carpeta y ruta de detalle. La vista muestra el aviso «Colección compartida» para no atribuir cada foto a una sede concreta.
- **Cultura**: 9 fotos reales del «Encuentro de expresiones culturales», con textos alternativos descriptivos. El orden del arreglo define el recorrido visual y el del visor.
- **Deporte**: sin fotos a propósito. El detalle muestra un estado vacío hasta que existan imágenes reales.
- Las portadas se indexan por **nombre oficial de la sede**, no por slug, para que Líbano y Villa Rosa tengan portadas distintas. Si falta una portada o el grupo fotográfico, la tarjeta de la sede se descarta en silencio.

## Fotografías

Las imágenes optimizadas viven en `public/`:

```text
public/
├── brand/              logo.png (escudo) y bandera.png
├── hero/               01–06.webp (fondos del carrusel, máx. 1920 px)
├── galeria/
│   ├── <sede>/         NN.webp (máx. 1280 px, WebP)
│   └── cultura/        01–09.webp (encuentro cultural)
└── uniformes/          diario-mujer, diario-hombre, educacion-fisica (.webp)
```

## SEO

- `metadataBase` y dominio canónico en `src/lib/seo.ts`.
- Plantilla de título `%s | CER Caliyaco` y descripción por defecto en el layout raíz.
- Cada página de nivel superior declara `paginaMetadata(...)` con título, descripción, canónica absoluta, Open Graph y Twitter card.
- JSON-LD global con `EducationalOrganization` y `WebSite`, usando datos oficiales (nombre, URL, logo, lema, teléfono, correo y dirección), sin coordenadas ni valoraciones inventadas.
- `robots.txt` permite el rastreo completo y referencia el sitemap; `sitemap.xml` lista las 7 rutas públicas de nivel superior.
- Verificación de Google Search Console mediante meta tag.

**Brechas conocidas:** las 4 rutas internas de galería no declaran `metadata`/canónica y no están incluidas en el sitemap. Tampoco hay imagen Open Graph personalizada.

## Diseño y accesibilidad

- **Tokens de color** en `src/app/globals.css` (`@theme inline`): `verde`, `verde-oscuro`, `verde-claro`, `amarillo`, `amarillo-hover`, `texto`, `texto-suave`, `sombra`. Verde para estructura e identidad; amarillo solo como acento.
- **Tipografía**: Poppins vía `next/font/google`, pesos 300–700.
- **Iconografía**: SVG inline propios, sin librerías de iconos.
- **Imágenes**: `next/image` con `fill` + `sizes`, `priority` solo en la imagen candidata a LCP y `object-position` controlado por dato.
- **Movimiento**: animación `aparecer-sutil`, siempre desactivada con `motion-reduce`, y carrusel sin autoplay si el usuario prefiere movimiento reducido.
- **Accesibilidad aplicada**: `aria-labelledby` en secciones con título, `aria-label` en navegaciones, `aria-current` en el estado activo, foco visible, menú móvil con `aria-expanded`, visor con `role="dialog"` y foco atrapado, acordeones nativos y anuncios del carrusel en región `aria-live`.

## Estructura del proyecto

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── contacto/page.tsx
│   ├── convivencia/page.tsx
│   ├── galeria/
│   │   ├── page.tsx
│   │   ├── sedes-educativas/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── cultura-y-deporte/
│   │       ├── page.tsx
│   │       └── [categoria]/page.tsx
│   ├── matriculas/page.tsx
│   ├── niveles-de-ensenanza/page.tsx
│   └── nosotros/page.tsx
├── components/
│   ├── Anuncios.tsx
│   ├── BannerMatriculas.tsx
│   ├── CategoriaCulturaDeporte.tsx
│   ├── CifrasInstitucionales.tsx
│   ├── Contacto.tsx
│   ├── Convivencia.tsx
│   ├── CulturaDeporte.tsx
│   ├── CulturaEncuentro.tsx
│   ├── CulturaGaleria.tsx
│   ├── Footer.tsx
│   ├── Galeria.tsx
│   ├── GaleriaEncabezado.tsx
│   ├── GaleriaFotosVisor.tsx
│   ├── GaleriaIconos.tsx
│   ├── GaleriaPreview.tsx
│   ├── GaleriaSelectorCategoria.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HeroCarousel.tsx
│   ├── JsonLd.tsx
│   ├── Lightbox.tsx
│   ├── Matriculas.tsx
│   ├── MisionVision.tsx
│   ├── NivelesEnsenanza.tsx
│   ├── Nosotros.tsx
│   ├── Perfiles.tsx
│   ├── Principios.tsx
│   ├── ProgramasDestacados.tsx
│   ├── ScrollToTop.tsx
│   ├── SedeGaleriaDetalle.tsx
│   ├── SedesEducativas.tsx
│   ├── UbicacionContacto.tsx
│   └── Uniformes.tsx
├── hooks/
│   └── useScrollSpy.ts
└── lib/
    ├── brand.ts
    ├── convivencia.ts
    ├── culturaDeporte.ts
    ├── galeria.ts
    ├── institucion.ts
    ├── locations.ts
    ├── matriculas.ts
    ├── niveles.ts
    └── seo.ts
```

## Flujo de ramas

- `master`: producción (solo recibe merges vía Pull Request).
- `feat/*` y `feature/*`: trabajo por funcionalidad, con Pull Request hacia `master`.
- Cada PR fusionado puede borrar su rama para mantener el repositorio limpio.

## Despliegue

Despliegue recomendado en **Vercel** (soporte nativo de Next.js y optimización de imágenes incluida en el plan gratuito): conecta el repositorio de GitHub, usa la rama `master` como producción y cada Pull Request genera una vista previa automática.

## Tecnologías

| Paquete | Versión | Rol |
| --- | --- | --- |
| `next` | 16.3.4 | Framework con App Router |
| `react` / `react-dom` | 19.2.8 | UI |
| `typescript` | ^5 | Tipado estricto |
| `tailwindcss` | ^4 | Estilos vía `@tailwindcss/postcss` |
| `eslint` + `eslint-config-next` | ^9 / 16.3.4 | Lint |

## Variables de entorno

Actualmente el proyecto no requiere variables de entorno para ejecutarse. Si se agregan en el futuro, utiliza un archivo local `.env.local` (ignorado por git) y mantén una plantilla pública en `.env.example`.
