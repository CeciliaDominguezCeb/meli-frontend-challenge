import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Search from "../../components/search-bar/search-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado Libre Test",
  description: "Compre productos con Envío Gratis en el día en Mercado Libre Argentina. Encuentre miles de marcas y productos a precios increíbles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <Search path="items" param="search" />
        {children}</body>
    </html>
  );
}
