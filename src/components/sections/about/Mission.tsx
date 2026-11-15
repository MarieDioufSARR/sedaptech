"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/content/siteConfig";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animation";

export default function Mission() {
  const { engagement, mission, vision } = siteConfig;

  const cards = [
    { icon: Target, titre: mission.titre, description: mission.description },
    { icon: Eye, titre: vision.titre, description: vision.description },
  ];

  return (
    <section
      aria-labelledby="engagement-title"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            id="engagement-title"
            eyebrow={engagement.tag}
            title={engagement.titre}
            highlight={engagement.highlight}
            description={engagement.description}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6 lg:mt-14"
        >
          {cards.map(({ icon: Icon, titre, description }) => (
            <motion.article
              key={titre}
              variants={staggerItem}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 md:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-ink ring-1 ring-slate-200">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-ink">
                {titre}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
