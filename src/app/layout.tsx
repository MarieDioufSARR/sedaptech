import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "SEDAP'Tech — L'aviculture connectée au Sénégal",
  description:
    "Solution complète alliant technologie intelligente et expertise avicole pour aider les producteurs sénégalais à gérer, optimiser et rentabiliser leur activité.",
  keywords: [
    "aviculture",
    "Sénégal",
    "élevage",
    "poulet",
    "technologie",
    "SEDAP",
  ],
  openGraph: {
    title: "SEDAP'Tech — L'aviculture connectée au Sénégal",
    description:
      "Caméras connectées, suivi technique et mise en marché pour les producteurs de volailles.",
    locale: "fr_SN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
