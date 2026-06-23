"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

import Button from "@/components/shared/Button";

import { siteConfig } from "@/content/siteConfig";
import { slideRight } from "@/lib/animation";

export default function HeroSection() {
  const { titre, titreAccent, sousTitre, ctaPrimaire, ctaSecondaire } =
    siteConfig.hero;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}

      <div className="absolute inset-0">
        <Image
          src="/Images/hero1.jpeg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY MODERNE — sombre et chic pour faire ressortir le texte et le personnage */}
        <div className="absolute inset-0 bg-black/40" />

        {/* GRADIENT GAUCHE — renforce la lisibilité du texte */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.18)_40%,transparent_100%)]" />

        {/* SPOTLIGHT DROIT — zone plus claire pour faire ressortir le personnage */}
        <div
          className="absolute right-0 top-6 h-40 w-40 md:w-96 md:h-96 rounded-full bg-white/30 blur-3xl opacity-95"
          aria-hidden="true"
        />

        {/* ACCENT CHAUD — halo subtil pour l’élégance */}
        <div
          className="absolute -left-16 top-1/4 h-80 w-80 rounded-full bg-amber-200/10 blur-3xl"
          aria-hidden="true"
        />

        {/* VIGNETTE — finition cinématique sombre */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.55),transparent_45%)]" />
      </div>
      <div className="relative z-10 flex min-h-screen items-center ">
        <div className=" px-6 lg:px-13">
          {/* LEFT */}

          <motion.div {...slideRight}>
            {/* TITLE */}

            <h1 className=" text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl max-w-4xl mx-auto lg:max-w-2xl ">
              {titre}{" "}
              <span className="bg-linear-to-r from-green-400 to-red-400 bg-clip-text text-transparent ">
                {titreAccent}
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300 ">
              {sousTitre}
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="https://wa.me/221776679166">{ctaPrimaire}</Button>

              <a
                href="/solution"
                aria-label={ctaSecondaire}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-red-300/40 hover:bg-white/20"
              >
                {ctaSecondaire}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
