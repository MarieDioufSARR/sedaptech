"use client";

import { fadeUp } from "@/lib/animation";
import { motion } from "framer-motion";
import { Handshake, Leaf, Sparkles } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    color: "text-red-500",
  },
  {
    icon: Handshake,
    title: "Proximité",
    color: "text-amber-500",
  },
  {
    icon: Leaf,
    title: "Durabilité",
    color: "text-emerald-500",
  },
];

export default function Valeur() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500"
          >
            <Sparkles className="h-4 w-4" />
            Nos valeurs
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-2xl md:3xl lg:3xl font-bold tracking-tight text-gray-900"
          >
            Ce qui nous guide au quotidien
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-gray-600">
            Les principes qui orientent chacune de nos actions.
          </motion.p>
        </motion.div>

        {/* Valeurs */}
        <div className="mt-16 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="flex items-center"
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group flex cursor-pointer items-center gap-4"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Icon className={`h-8 w-8 ${value.color}`} />
                  </motion.div>

                  <span className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">
                    {value.title}
                  </span>
                </motion.div>

                {index < values.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.2,
                      duration: 0.5,
                    }}
                    className="ml-12 hidden h-10 w-px origin-center bg-linear-to-b from-transparent via-gray-300 to-transparent md:block"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
