"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";

import { fadeUp, slideRight } from "@/lib/animation";
import Link from "next/link";

export default function SolutionHeader() {
  return (
    <section className="relative min-h-60 md:min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/Images/solution.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/40 to-black/80" />

        <div className="absolute inset-0 bg-linear-to-r from-emerald-950/30 via-transparent to-transparent" />

        <div className="absolute right-0 top-0 h-125 w-125 rounded-full bg-emerald-500/15 blur-[120px]" />
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={slideRight}
        className="relative z-10 flex items-center gap-2 px-6 py-6 text-sm text-white/80"
      >
        <Link href="/" className="text-white/70 transition hover:text-white">
          Accueil
        </Link>
        <GoChevronRight className="h-4 w-4 text-white/60" />
        <a
          href="/solutionPage"
          className="text-white transition hover:text-emerald-200"
        >
          Solution
        </a>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-125 sm:min-h-screen items-center justify-center px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-4xl text-center text-white"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          >
            Une solution complète pour piloter votre élevage
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto"
          >
            Surveillez, gérez et développez votre élevage grâce à notre
            écosystème numérique complet et parfaitement intégré.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
