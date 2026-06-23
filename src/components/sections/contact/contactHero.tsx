import Image from "next/image";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default function ContactHero() {
  return (
    <section className="border-t border-gray-200">
      {/* Hero */}
      <div className="relative h-60 overflow-hidden">
        {/* Image de fond */}
        <Image
          src="/Images/poul.jpg"
          alt="Agriculture intelligente"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/85" />

        {/* Breadcrumb */}
        <div className="relative z-10 flex items-center gap-2 px-6 py-6">
          <Link href="/" className="text-white/80 transition hover:text-white">
            Accueil
          </Link>

          <GoChevronRight className="h-4 w-4 text-white" />

          <Link
            href="/contact"
            className="text-white font-medium transition hover:text-emerald-200"
          >
            Contact
          </Link>
        </div>
        <div className="relative mt-5 z-10 flex justify-center items-center">
          <h1 className="text-white/80 text-sm italic">
            Avec Sedaptech votre elevage est a porté de main
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="mx-auto max-w-7xl px-6 py-12 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Parlons de votre projet agricole
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Une question, un partenariat ou un projet à développer ? Notre équipe
          est disponible pour vous accompagner.
        </p>
      </div>
    </section>
  );
}
