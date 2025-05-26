import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

/*const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

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
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
