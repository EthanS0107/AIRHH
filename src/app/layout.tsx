import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIRHH — Agence de Communication | Donnez du souffle à votre marque",
  description:
    "AIRHH propulse votre image de marque grâce à une communication agile, stratégique et résolument tournée vers demain. Stratégie, Social Media, Design & Web.",
  keywords: [
    "agence communication",
    "branding",
    "social media",
    "design",
    "stratégie de marque",
    "Paris",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${plusJakarta.variable} ${syne.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
