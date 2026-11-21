import type { Metadata } from "next";
import { Anton, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Anton = huge condensed headlines, Archivo = body text, JetBrains Mono = small tags
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Sachintha | Software Engineer",
  description:
    "Portfolio of Sachintha, a software engineering undergraduate building full-stack web apps, mobile games and databases.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
