"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/content/siteConfig";
import { fadeUp } from "@/lib/animation";

export function FaqSection() {
  const { tag, title, description, items, aide } = siteConfig.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-title"
      className="bg-[#F5F8F4] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Colonne gauche : présentation et contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:sticky lg:top-28"
          >
            <SectionHeader
              id="faq-title"
              eyebrow={tag}
              title={title}
              description={description}
              accent="leaf"
              align="left"
            />

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf/10 text-leaf">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-ink">{aide.texte}</p>

                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark transition-colors hover:text-brand"
                  >
                    {aide.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite : questions fréquentes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-leaf/30 shadow-md shadow-leaf/5"
                      : "border-slate-200 shadow-sm hover:border-leaf/30"
                  }`}
                >
                  {/* Intitulé de la question */}
                  <h3>
                    <button
                      type="button"
                      id={`faq-question-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left transition-colors sm:px-6 ${
                        isOpen ? "bg-leaf/[0.04]" : "hover:bg-slate-50/80"
                      }`}
                    >
                      <span className="text-base font-semibold leading-snug text-ink sm:text-[1.05rem]">
                        {item.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          isOpen
                            ? "bg-leaf/10 text-leaf"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
