"use client";

import { siteConfig } from "@/content/siteConfig";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-black/80">
      {/* Background */}

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black px-4 py-2 text-sm font-medium text-white">
            <MessageCircleQuestion className="h-4 w-4" />
            {siteConfig.faq.tag}
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {siteConfig.faq.title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-400">
            {siteConfig.faq.description}
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {siteConfig.faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-black/3 backdrop-blur-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/2 cursor-pointer"
                >
                  <span className="pr-6 text-lg font-semibold text-white">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <ChevronDown className="h-5 w-5 text-emerald-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="border-t border-white/5 px-6 pb-6 pt-4">
                        <p className="leading-relaxed text-neutral-400">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
