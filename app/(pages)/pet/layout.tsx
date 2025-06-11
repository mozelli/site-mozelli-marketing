import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mozelli Marketing - Pet",
};

export default function PetLayout({
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
