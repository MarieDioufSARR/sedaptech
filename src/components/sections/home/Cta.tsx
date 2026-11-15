import { siteConfig } from "@/content/siteConfig";

type Props = {
  tone?: "white" | "gray";
};

export default function Cta({ tone = "white" }: Props) {
  const { tag, titre, ctaPrimaire, description } = siteConfig.CtaSection;
  const sectionBg = tone === "gray" ? "bg-slate-50" : "bg-white";

  return (
    <section
      aria-labelledby="cta-title"
      className={sectionBg + " py-16 sm:py-20 lg:py-24"}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-center shadow-[0_20px_50px_-28px_rgba(15,23,42,0.35)] sm:px-12 sm:py-16 lg:rounded-[2rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft sm:text-sm">
            {tag}
          </p>

          <h2
            id="cta-title"
            className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
          >
            {titre}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {description}
            </p>
          )}

          <div className="mt-8">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ctaPrimaire} sur WhatsApp`}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-4 focus-visible:ring-offset-ink sm:text-base"
            >
              {ctaPrimaire}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
