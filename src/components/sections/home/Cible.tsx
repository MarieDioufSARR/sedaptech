"use client";

import { motion, useReducedMotion } from "framer-motion";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/content/siteConfig";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animation";
import { icons } from "@/lib/icons";

export default function Cible() {
  const { tag, titre, highlight, items } = siteConfig.cible;
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="cible-title"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            id="cible-title"
            eyebrow={tag}
            title={titre}
            highlight={highlight}
          />
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid items-stretch gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6"
        >
          {items.map((item) => {
            const Icon = icons[item.icone as keyof typeof icons];

            return (
              <motion.li
                key={item.titre}
                variants={staggerItem}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.25)] sm:p-7 lg:p-8"
              >
                <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-ink transition-transform duration-300 group-hover:scale-105">
                  {Icon ? (
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  ) : null}
                </div>

                <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                  {item.titre}
                </h3>

                <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>
  );
}
