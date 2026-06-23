"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

import { siteConfig } from "@/content/siteConfig";

export default function Mission() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-24 border-t border-gray-100 bg-gray-400/10">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-black-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500">
            Notre engagement
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Une vision claire pour transformer lélevage
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Nous accompagnons les éleveurs avec des solutions innovantes pour
            améliorer leur productivité et leur rentabilité.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-gray-400/20 p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
              <Target className="h-8 w-8 text-red-500" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              {siteConfig.mission.titre}
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {siteConfig.mission.description}
            </p>

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-500/5 blur-3xl" />
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-200/70  bg-gray-400/20 p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
              <Eye className="h-8 w-8 text-emerald-600" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              {siteConfig.vision.titre}
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {siteConfig.vision.description}
            </p>

            <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
