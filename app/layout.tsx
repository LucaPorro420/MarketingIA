import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Diseño Gráfico con freeCodeCamp | Aprende Gratis",
  description:
    "Descubre los mejores recursos, cursos y herramientas de freeCodeCamp para aprender diseño gráfico de forma gratuita. Guía completa en español.",
  keywords: "freeCodeCamp, diseño gráfico, aprender diseño, cursos gratis, español",
  openGraph: {
    title: "Diseño Gráfico con freeCodeCamp",
    description: "Aprende diseño gráfico de forma gratuita con freeCodeCamp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${_inter.variable} ${_spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
