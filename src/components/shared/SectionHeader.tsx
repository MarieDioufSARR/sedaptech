import type { ReactNode } from "react";

import HighlightedText from "@/components/shared/HighlightedText";

type Props = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  accent?: "brand" | "leaf";
  highlight?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  accent = "brand",
  highlight,
  align = "center",
}: Props) {
  const alignment = align === "left" ? "text-left" : "text-center";

  const accentColor = accent === "leaf" ? "text-leaf" : "text-brand";

  return (
    <div
      className={`w-full max-w-3xl ${
        align === "center" ? "mx-auto" : ""
      } ${alignment}`}
    >
      {/* Sous-titre */}
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] sm:text-[0.8125rem] ${
          accent === "leaf" ? "text-leaf" : "text-brand-dark"
        }`}
      >
        {eyebrow}
      </p>

      {/* Titre principal */}
      <h2
        id={id}
        className={`mt-4 max-w-[22ch] text-balance text-[1.75rem] font-bold leading-[1.18] tracking-tight text-ink sm:mt-5 sm:max-w-[24ch] sm:text-4xl sm:leading-[1.15] lg:text-[2.6rem] lg:leading-[1.12] ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {typeof title === "string" ? (
          <HighlightedText
            text={title}
            highlight={highlight}
            className={accentColor}
          />
        ) : (
          title
        )}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-4 max-w-[58ch] text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
