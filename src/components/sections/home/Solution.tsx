"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/content/siteConfig";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animation";

export default function Solution() {
  const { badge, titre, highlight, description, services } =
    siteConfig.solution;

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="solution"
      aria-labelledby="solution-title"
      className="bg-white py-14 sm:py-16 lg:py-24"
    >
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            id="solution-title"
            eyebrow={badge}
            title={titre}
            description={description}
            accent="leaf"
            highlight={highlight}
          />
        </motion.div>

        {/* Illustration et services */}
        <div className="mt-9 grid items-center gap-7 sm:mt-12 sm:gap-8 lg:mt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-14">
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: "easeOut",
            }}
            className="min-w-0"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-1.5 shadow-[0_16px_36px_-24px_rgba(15,23,42,0.28)] sm:rounded-3xl sm:p-2">
              <Image
                src="/Images/solution3.png"
                width={900}
                height={700}
                sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 45vw, 100vw"
                alt="Un éleveur surveille son poulailler à l'aide de son téléphone."
                className="h-56 w-full rounded-xl object-cover object-center sm:h-80 md:h-[360px] lg:h-[340px] xl:h-[390px] cursor-pointer"
              />
            </div>
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 cursor-pointer"
          >
            {services.map((service, index) => (
              <motion.li
                key={service.titre}
                variants={reduceMotion ? undefined : staggerItem}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                }}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-[border-color,box-shadow,transform] duration-300 hover:border-leaf/40 hover:shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)] motion-safe:hover:-translate-y-0.5 sm:p-5 md:p-6"
              >
                <span
                  className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf/10 text-sm font-bold tabular-nums text-leaf ring-1 ring-leaf/15"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base font-semibold leading-snug tracking-tight text-ink sm:text-lg">
                  {service.titre}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                  {service.sous}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
