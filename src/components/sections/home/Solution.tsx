"use client";
import { siteConfig } from "@/content/siteConfig";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Solution() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center mx-auto flex flex-col justify-center items-center bg-green-300/10 rounded-full px-3 text-sm font-medium text-green-600 w-50 h-10"
        >
          {siteConfig.solution.badge}
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:text-3xl font-bold text-gray-900 mt-5 text-2xl text-center"
        >
          {siteConfig.solution.titre}
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-md lg:text-gray-600 mt-5"
        >
          {siteConfig.solution.description}
        </motion.p>
      </div>

      <div className="flex justify-between flex-col lg:flex-row items-center px-10 mt-10 lg:mt-14 gap-10 ">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:px-12"
        >
          <Image
            src="/Images/Sedap.jpg"
            width={500}
            height={700}
            alt="Solution"
            className="rounded-2xl border border-gray-200 shadow-sm"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid gap-4 sm:grid-cols-2 max-w-xl mt-5 lg:mt-0 lg:mr-16 "
        >
          {siteConfig.solution.services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="mb-6 border border-gray-200 rounded-xl p-4 shadow-sm cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-green-600">
                {service.titre}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{service.sous}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
