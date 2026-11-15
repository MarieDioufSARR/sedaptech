"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "@/components/shared/Container";
import HighlightedText from "@/components/shared/HighlightedText";
import { siteConfig } from "@/content/siteConfig";
import { staggerContainer, staggerItem } from "@/lib/animation";

export default function AboutHero() {
  const {
    tag,
    titre,
    highlight,
    sousTitre,
    sousTitre2,
    sousTitre3,
    dirigeante,
  } = siteConfig.apropos;

  return (
    <section
      aria-labelledby="about-title"
      className="bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-y-5 md:grid-cols-[1.15fr_0.85fr] md:grid-rows-2 md:gap-x-10 md:gap-y-4 lg:grid-cols-[1.3fr_0.7fr] lg:gap-x-16 xl:grid-cols-[minmax(0,34rem)_minmax(0,24rem)] xl:justify-center xl:gap-x-20"
        >
          <motion.div
            variants={staggerItem}
            className="md:col-start-1 md:row-start-1 md:self-end"
          >
            <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-brand-dark sm:text-sm">
              {tag}
            </p>

            <h1
              id="about-title"
              className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-ink lg:text-5xl"
            >
              <HighlightedText text={titre} highlight={highlight} />
            </h1>

            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-slate-700 lg:text-xl">
              {sousTitre}
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="max-w-[62ch] space-y-4 md:col-start-1 md:row-start-2 md:self-start"
          >
            <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
              {sousTitre2}
            </p>
            <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
              {sousTitre3}
            </p>
          </motion.div>

          <motion.figure
            variants={staggerItem}
            className="mt-3 w-full md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:self-center"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.3)]">
              <Image
                src="/Images/mengue.png"
                alt={`${dirigeante.nom}, ${dirigeante.role} de SEDAP’Tech`}
                width={500}
                height={625}
                sizes="(min-width: 768px) 40vw, 100vw"
                priority
                className="aspect-[4/5] w-full rounded-xl object-cover object-top sm:aspect-[16/10] md:aspect-[4/5]"
              />
            </div>

            <figcaption className="mt-4">
              <p className="text-lg font-semibold tracking-tight text-ink">
                {dirigeante.nom}
              </p>
              <p className="text-sm text-slate-500">{dirigeante.role}</p>
            </figcaption>
          </motion.figure>
        </motion.div>
      </Container>
    </section>
  );
}
