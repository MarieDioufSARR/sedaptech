"use client";

import { siteConfig } from "@/content/siteConfig";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animation";
import { icons } from "@/lib/icons";
import { motion } from "framer-motion";

export default function Cible() {
  const { tag, titre, items } = siteConfig.cible;

  return (
    <section className="border-t border-gray-100 py-15 lg:py-18">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            {...fadeUp}
            className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500"
          >
            {tag}
          </motion.span>

          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-8 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl text-center md:px-5"
          >
            {titre}
          </motion.h2>
        </div>

        {/* Cibles */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-10 md:flex md:items-center md:justify-center md:gap-12"
        >
          {items.map((item, index) => {
            const Icon = icons[item.icone as keyof typeof icons];

            return (
              <motion.div
                key={index}
                variants={staggerItem}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center text-center md:flex-row md:text-left"
              >
                <div className="group flex flex-col items-center gap-4 md:flex-row">
                  {/* Icône */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500/15">
                    {Icon && <Icon className="h-8 w-8 text-red-500" />}
                  </div>

                  {/* Texte */}
                  <h3 className="max-w-55 text-lg font-semibold text-gray-900 lg:text-xl">
                    {item.titre}
                  </h3>
                </div>

                {/* Séparateur Desktop */}
                {index < items.length - 1 && (
                  <div className="ml-12 hidden h-12 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent md:block" />
                )}

                {/* Séparateur Mobile */}
                {index < items.length - 1 && (
                  <div className="mt-8 h-px w-20 bg-linear-to-r from-transparent via-gray-300 to-transparent md:hidden" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
