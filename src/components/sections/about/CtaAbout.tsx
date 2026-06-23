import Button from "@/components/shared/Button";
import { siteConfig } from "@/content/siteConfig";
import { ArrowRight } from "lucide-react";

export default function CtaAbout() {
  const { ctaPrimaire, ctaSecondaire } = siteConfig.ctaAbout;
  return (
    <section className="py-16 px-8 bg bg-black/80">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold text-white text-center">
          {siteConfig.ctaAbout.titre}
        </h3>
        <div className="mt-10 flex flex-col gap-12 sm:flex-row">
          <Button href="/solution">{ctaPrimaire}</Button>
          <a
            href="https://wa.me/221776679166"
            aria-label={ctaSecondaire}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red/10  px-6 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-red-300/40 hover:bg-white/20 hover:text-black bg-gray-900"
          >
            {ctaSecondaire}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
