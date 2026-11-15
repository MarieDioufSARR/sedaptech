"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { siteConfig } from "@/content/siteConfig";
import { slideRight } from "@/lib/animation";

export default function HeroSection() {
  const { titre, titreAccent, sousTitre, ctaPrimaire, ctaSecondaire } =
    siteConfig.hero;

  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-ink pt-16 sm:pt-20">
      <div className="absolute inset-0">
        <Image
          src="/Images/hero1.jpeg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/65 to-ink/25 sm:bg-linear-to-r sm:from-ink/95 sm:via-ink/75 sm:to-ink/20" />

        <div className="absolute inset-0 hidden bg-linear-to-t from-ink/65 via-transparent to-transparent sm:block" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto flex min-h-[calc(88svh-4rem)] max-w-6xl items-end justify-start px-5 pb-10 pt-12 sm:min-h-[calc(88svh-5rem)] sm:items-center sm:px-6 sm:pb-16 sm:pt-10 lg:px-2">
        <motion.div
          {...slideRight}
          className="w-full max-w-3xl text-left lg:-ml-32"
        >
          {/* Identité de la marque */}
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.08em] text-white/90 sm:text-sm sm:tracking-[0.1em]">
            <span
              className="h-px w-8 shrink-0 rounded-full bg-brand sm:w-9"
              aria-hidden="true"
            />
            <span>SEDAP’Tech</span>
          </p>

          {/* Titre principal */}
          <h1
            className="mt-5 text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:mt-6 sm:text-5xl sm:leading-[1.1] lg:text-6xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <span className="block">{titre}</span>

            <span className="mt-3 block text-brand-soft sm:mt-2">
              {titreAccent}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base font-normal leading-7 text-slate-200 sm:mt-8 sm:text-lg sm:leading-8">
            {sousTitre}
          </p>

          {/* Appels à l'action */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors duration-300 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-6"
            >
              {ctaPrimaire}
            </a>

            <a
              href="/solution"
              aria-label={ctaSecondaire}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-6"
            >
              {ctaSecondaire}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
