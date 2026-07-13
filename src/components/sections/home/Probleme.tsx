"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import Container from "@/components/shared/Container";

import { siteConfig } from "@/content/siteConfig";

import { fadeUp, staggerContainer } from "@/lib/animation";
import { icons } from "@/lib/icons";

type Problem = {
  title: string;
  description: string;
  icon: string;
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

function ProblemCard({ problem }: { problem: Problem }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const Icon = icons[problem.icon as keyof typeof icons];

  return (
    <motion.div
      variants={slideInLeft}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/3 backdrop-blur-xl"
    >
      {/* TOP BORDER EFFECT */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-green-400 via-red-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* SPOTLIGHT SUIVANT LA SOURIS */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(74,222,128,0.08), transparent 70%)`,
        }}
      />

      {/* CARD CONTENT */}
      <div className="relative p-8">
        {/* ICON */}
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-green-400 group-hover:border-red-400/30 group-hover:bg-red-500/10 group-hover:text-red-300"
        >
          {Icon ? <Icon className="h-7 w-7" /> : null}
        </motion.div>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-200">
          {problem.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 text-base leading-relaxed text-white/75">
          {problem.description}
        </p>
      </div>

      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-br from-red-500/6 via-transparent to-green-500/6" />
      </div>
    </motion.div>
  );
}

export default function Probleme() {
  const { title, subtitle, problems } = siteConfig.ProblematiqueSection;

  const needle = "défi majeur";
  const lower = title.toLowerCase();
  const idx = lower.indexOf(needle);

  const before = idx !== -1 ? title.slice(0, idx) : title;
  const match = idx !== -1 ? title.slice(idx, idx + needle.length) : "";
  const after = idx !== -1 ? title.slice(idx + needle.length) : "";

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">
      {/* BACKGROUND EFFECTS */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.16, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"
        aria-hidden="true"
      />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[80px_80px]" />
      </div>

      <Container className="relative z-10">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mt-4 lg:text-3xl font-black tracking-tight text-white/90 text-2xl">
            {idx === -1 ? (
              title
            ) : (
              <>
                {before}
                <span className="text-green-400 inline-block">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="inline-block"
                  >
                    {match}
                  </motion.span>
                </span>
                {after}
              </>
            )}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/68 sm:text-lg text-center">
            {subtitle}
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-4 cursor-pointer"
        >
          {problems.map((problem, index) => (
            <ProblemCard key={`${problem.title}-${index}`} problem={problem} />
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-green-600 mt-12 lg:mt-18 lg:text-lg mx-auto"
        >
          Et si vous pouviez reprendre le controle totale ?
        </motion.p>
      </Container>
    </section>
  );
}
