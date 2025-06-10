import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito_sans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mozelli Marketing",
  description:
    "Agência de Marketing Digital. Prestação de serviços de Gestão de Redes Sociais, Gestão de Tráfego, Web Design, Criação de Conteúdo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito_sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
