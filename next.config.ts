import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/programas",
        destination: "/niveles-de-ensenanza",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
