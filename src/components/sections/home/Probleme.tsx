"use client";

import { motion, useReducedMotion } from "framer-motion";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/content/siteConfig";
import { fadeUp, staggerContainer } from "@/lib/animation";
import { icons } from "@/lib/icons";

type Problem = {
  title: string;
  description: string;
  icon: string;
};

const slideIn = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
};

const fadeOnly = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function ProblemCard({ problem }: { problem: Problem }) {
  const reduceMotion = useReducedMotion();
  const Icon = icons[problem.icon as keyof typeof icons];

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.li
      variants={reduceMotion ? fadeOnly : slideIn}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      onMouseMove={handleMouseMove}
      className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.03)] transition-[border-color,box-shadow] duration-300 hover:border-brand/30 hover:shadow-[0_16px_32px_-22px_rgba(15,23,42,0.22)] md:rounded-[20px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(216,58,46,0.055), transparent 70%)",
        }}
      />

      <div className="relative flex h-full items-start gap-3.5 p-4 sm:gap-4 sm:p-5 md:flex-col md:gap-0 md:p-6 lg:p-7">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/[0.07] text-brand ring-1 ring-brand/10 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11 md:mb-5 md:h-12 md:w-12">
          {Icon ? (
            <Icon
              className="h-5 w-5 sm:h-[1.375rem] sm:w-[1.375rem]"
              aria-hidden="true"
            />
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-ink sm:text-base md:text-lg">
            {problem.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-600 md:mt-3 md:text-[0.9375rem] md:leading-7">
            {problem.description}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default function Probleme() {
  const {
    tag = "Le constat",
    title,
    highlight,
    subtitle,
    problems,
  } = siteConfig.ProblematiqueSection;

  return (
    <section
      aria-labelledby="probleme-title"
      className="bg-slate-50 py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader
            id="probleme-title"
            eyebrow={tag}
            description={subtitle}
            title={title}
            highlight={highlight}
          />
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-8 grid grid-cols-1 items-stretch gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:grid-cols-2 md:gap-5 xl:grid-cols-4 xl:gap-5 cursor-pointer"
        >
          {problems.map((problem, index) => (
            <ProblemCard key={`${problem.title}-${index}`} problem={problem} />
          ))}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl border-t border-slate-200 pt-7 text-center sm:mt-12 sm:pt-9 lg:mt-14"
        >
          <p className="text-base font-semibold leading-relaxed tracking-tight text-ink sm:text-lg md:text-xl">
            Votre élevage mérite un suivi plus{" "}
            <span className="text-brand">rigoureux et adapté</span> à vos
            besoins.
          </p>

          <div
            className="mt-3 text-lg text-slate-400 sm:mt-4"
            aria-hidden="true"
          >
            ↓
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
