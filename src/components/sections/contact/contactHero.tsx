import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/siteConfig";

export default function ContactHero() {
  const { tag, titre, highlight, description } = siteConfig.contact.header;

  const highlightIndex = highlight ? titre.indexOf(highlight) : -1;
  const hasHighlight = highlightIndex !== -1;

  const titreAvant = hasHighlight ? titre.slice(0, highlightIndex) : titre;

  const titreApres = hasHighlight
    ? titre.slice(highlightIndex + highlight!.length)
    : "";

  return (
    <section
      aria-labelledby="contact-title"
      className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-ink py-28 sm:min-h-[460px] sm:py-32 lg:min-h-[500px] lg:py-36"
    >
      <Image
        src="/Images/poul.jpg"
        alt=""
        fill
        preload
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/80 to-ink/90"
      />

      {/* Contenu principal */}
      <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <nav aria-label="Fil d'Ariane">
          <ol className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <li>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Accueil
              </Link>
            </li>

            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>

            <li aria-current="page" className="font-semibold text-white">
              {tag}
            </li>
          </ol>
        </nav>

        <h1
          id="contact-title"
          className="mx-auto mt-8 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {hasHighlight ? (
            <>
              {titreAvant}
              <span className="text-brand-soft">{highlight}</span>
              {titreApres}
            </>
          ) : (
            titre
          )}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg sm:leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
