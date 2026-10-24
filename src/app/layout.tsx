import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CER Caliyaco | Centro Educativo Rural en Mocoa, Putumayo",
    template: "%s | CER Caliyaco",
  },
  description:
    "Centro Educativo Rural Caliyaco: educación pública con énfasis en Ciencias Naturales en 8 sedes rurales de Mocoa, Putumayo. Preescolar, básica primaria y secundaria.",
  applicationName: SITE_NAME,
  authors: [{ name: "Centro Educativo Rural Caliyaco" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-texto">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
