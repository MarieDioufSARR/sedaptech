"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  HandHelping,
  LayoutDashboard,
  Store,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import HighlightedText from "@/components/shared/HighlightedText";
import { siteConfig } from "@/content/siteConfig";
import { staggerContainer, staggerItem } from "@/lib/animation";

export default function SolutionHeader() {
  const { header, camera, plateforme, market, suiviTechnique } =
    siteConfig.solutionPage;

  const pillars = [
    { icon: Video, label: camera.tag },
    { icon: LayoutDashboard, label: plateforme.tag },
    { icon: HandHelping, label: suiviTechnique.tag },
    { icon: Store, label: market.tag },
  ];

  return (
    <section
      aria-labelledby="solution-header-title"
      className="relative isolate overflow-hidden bg-ink pt-16 lg:pt-20"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:gap-14 lg:py-24"
        >
          {/* Contenu principal */}
          <div className="relative z-10">
            <motion.nav
              variants={staggerItem}
              aria-label="Fil d’Ariane"
              className="flex items-center gap-2 text-sm text-white/60"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Accueil
              </Link>

              <ChevronRight className="h-4 w-4" aria-hidden="true" />

              <span aria-current="page" className="text-white">
                Solutions
              </span>
            </motion.nav>

            {/* Titre */}
            <motion.h1
              id="solution-header-title"
              variants={staggerItem}
              className="mt-7 max-w-2xl text-balance text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]"
            >
              <HighlightedText
                text={header.titre}
                highlight={header.highlight}
                className="text-brand-soft"
              />
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
            >
              {header.description}
            </motion.p>

            {/* Boutons */}
            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#camera"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Découvrir nos solutions
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Échanger avec notre équipe
              </a>
            </motion.div>
          </div>

          {/* Image principale */}
          <motion.div variants={staggerItem} className="relative w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl sm:aspect-[5/4] lg:aspect-[4/3]">
              <Image
                src="/Images/solutionHeader.png"
                alt="Un responsable avicole utilisant les outils connectés SEDAP"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                quality={90}
                className="object-cover object-right-bottom"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
              />
            </div>

            {/* Signature visuelle */}
            {/* <div className="absolute -bottom-4 -left-3 rounded-xl border border-white/15 bg-ink/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-5 sm:px-5">
              <p className="text-xs font-medium text-white/60">SEDAP’Tech</p>

              <p className="mt-1 text-sm font-semibold text-white">
                Laviculture connectée
              </p>
            </div> */}
          </motion.div>
        </motion.div>

        {/* Les quatre piliers */}
        <div className="border-t border-white/15 py-7 sm:py-8">
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-6"
          >
            {pillars.map(({ icon: Icon, label }) => (
              <motion.li
                key={label}
                variants={staggerItem}
                className="flex items-center gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-soft">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>

                <span className="text-xs font-medium leading-snug text-white/75 sm:text-sm">
                  {label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
