import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/content/siteConfig";

export default function CtaAbout() {
  const { titre, ctaPrimaire, ctaSecondaire } = siteConfig.ctaAbout;

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {titre}
          </h2>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-colors duration-300 hover:bg-brand-dark"
            >
              {ctaPrimaire}
            </a>

            <Link
              href="/solution"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-7 py-4 text-base font-semibold text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
            >
              {ctaSecondaire}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
