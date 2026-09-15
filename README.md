# CER Caliyaco

Landing page multipágina del Centro Educativo Rural Caliyaco, ubicado en la vereda Caliyaco, Mocoa - Putumayo, Colombia.

El sitio presenta la identidad institucional, la misión, la visión, los programas académicos, la información de matrículas, la galería y los datos de contacto.

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
| `/` | Inicio, lema institucional y acceso a las secciones principales. |
| `/nosotros` | Misión y visión del Centro Educativo Rural Caliyaco. |
| `/programas` | Programas académicos ofrecidos por la institución. |
| `/galeria` | Espacio para la galería institucional. |
| `/matriculas` | Información sobre matrículas 2026. |
| `/contacto` | Teléfono, correo y ubicación institucional. |

## Estructura principal

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── contacto/page.tsx
│   ├── galeria/page.tsx
│   ├── matriculas/page.tsx
│   ├── nosotros/page.tsx
│   └── programas/page.tsx
├── components/
│   ├── Contacto.tsx
│   ├── Footer.tsx
│   ├── Galeria.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Matriculas.tsx
│   ├── Nosotros.tsx
│   └── Programas.tsx
├── hooks/
│   └── useScrollSpy.ts
└── lib/
    └── brand.ts
```

Los recursos de identidad visual se encuentran en `public/brand/`:

- `logo.png`: escudo institucional, usado también como favicon.
- `bandera.png`: bandera institucional.

## Tecnologías

- Next.js 16 con App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Variables de entorno

Actualmente el proyecto no requiere variables de entorno para ejecutarse. Si se agregan en el futuro, utiliza un archivo local `.env.local` y no lo subas al repositorio. La plantilla pública puede mantenerse en `.env.example`.
