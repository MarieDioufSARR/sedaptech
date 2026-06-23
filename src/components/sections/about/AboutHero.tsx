"use client";
import { siteConfig } from "@/content/siteConfig";
import {
  fadeUp,
  slideRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative py-16 px-8 bg-gray-400/10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 max-w-7xl mx-auto md:grid-cols-2"
      >
        {/* LEFT COLUMN */}
        <motion.div variants={staggerItem} className="flex flex-col">
          {/* TAG */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-flex"
          >
            <div className="text-lg font-semibold text-white bg-red-700 px-3 py-1 rounded-full mb-6 w-fit text-start">
              {siteConfig.apropos.tag}
            </div>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={slideRight}
            transition={{ duration: 0.7 }}
            className="text-2xl font-bold lg:text-4xl text-black/90 tracking-tight lg:text-start text-start"
          >
            {siteConfig.apropos.titre}
          </motion.h1>

          {/* PARAGRAPHS */}
          <motion.p
            variants={staggerItem}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-900 text-start text-md"
          >
            {siteConfig.apropos.sousTitre}
          </motion.p>

          <motion.p
            variants={staggerItem}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-900 text-start mt-3 text-md"
          >
            {siteConfig.apropos.sousTitre2}
          </motion.p>

          <motion.p
            variants={staggerItem}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-900 text-start mt-3 text-md"
          >
            {siteConfig.apropos.sousTitre3}
          </motion.p>
        </motion.div>

        {/* RIGHT COLUMN - IMAGE */}
        <motion.div
          variants={staggerItem}
          className="flex justify-center items-center flex-col mt-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="rounded-4xl overflow-hidden"
          >
            <Image
              src="/images/apropo1.jpg"
              alt="About Hero"
              width={500}
              height={250}
              className="object-cover border border-b-amber-600 rounded-4xl shadow-lg"
            />
          </motion.div>

          {/* NAME & ROLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg font-bold text-black/90 mt-6"
          >
            Mengue Diouf
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-md text-gray-700"
          >
            Directrice Générale
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
