"use client";

import { motion } from "framer-motion";
import { Handshake, Leaf, Sparkles } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/content/siteConfig";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animation";

const iconMap = { Sparkles, Handshake, Leaf } as const;

export default function Valeur() {
  const { tag, titre, description, items } = siteConfig.valeurs;

  return (
    <section
      aria-labelledby="valeurs-title"
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
            id="valeurs-title"
            eyebrow={tag}
            title={titre}
            description={description}
          />
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6 lg:mt-14"
        >
          {items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <motion.li
                key={item.titre}
                variants={staggerItem}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.03)] md:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-ink">
                  {Icon ? (
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  ) : null}
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {item.titre}
                </h3>

                <p className="mt-2 text-base leading-relaxed text-slate-600">
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
