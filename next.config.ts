import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/programas",
        destination: "/niveles-de-ensenanza",
        permanent: true,
      },
      // La antigua vista «Cultura y deporte» se dividió en dos categorías
      // independientes. Se conservan las URL anteriores con redirección
      // permanente para no perder enlaces ni posicionamiento.
      {
        source: "/galeria/cultura-y-deporte",
        destination: "/galeria",
        permanent: true,
      },
      {
        source: "/galeria/cultura-y-deporte/cultura",
        destination: "/galeria/cultura",
        permanent: true,
      },
      {
        source: "/galeria/cultura-y-deporte/deporte",
        destination: "/galeria",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
