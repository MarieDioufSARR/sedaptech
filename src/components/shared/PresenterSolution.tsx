"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animation";
import { getIcon, iconMap } from "@/lib/iconMapper";

type Feature = {
  title: string;
  icon: string;
};

type Props = {
  /** Sert d'ancre (#id) pour la navigation de l'en-tête de page */
  id: string;

  data: {
    tag: string;
    title: string;
    highlight?: string;
    description: string;
    features: Feature[];
  };

  image?: {
    src: string;
    alt?: string;
  };

  featuresTitle?: string;

  imageSide?: "left" | "right";

  /** Fond de la section */
  tone?: "white" | "gray";

  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };

  float?: boolean;
};

// Bouton d'action réutilisable
function CtaButton({ cta }: { cta: NonNullable<Props["cta"]> }) {
  const className =
    "inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors duration-300 hover:bg-brand-dark";

  return cta.external ? (
    <a
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {cta.label}
    </a>
  ) : (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

export default function PresenterSolution({
  id,
  data,
  image,
  featuresTitle,
  imageSide = "left",
  tone = "white",
  cta,
  float = false,
}: Props) {
  const gray = tone === "gray";

  const sectionBg = gray ? "bg-slate-50" : "bg-white";

  // Les cartes prennent une couleur différente de celle du fond
  const cardBg = gray ? "bg-white" : "bg-slate-50/70";

  const titleId = `${id}-title`;

  const icon = (name: string, size: string) => {
    const Icon = getIcon(name as keyof typeof iconMap);

    return Icon ? <Icon className={size} aria-hidden="true" /> : null;
  };

  /* --------------------------------------------------
     VARIANTE SANS IMAGE
     En-tête centré + grille de cartes
  -------------------------------------------------- */

  if (!image) {
    return (
      <section
        id={id}
        aria-labelledby={titleId}
        className={`${sectionBg} py-16 sm:py-20 lg:py-24`}
      >
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeader
              id={titleId}
              eyebrow={data.tag}
              title={data.title}
              highlight={data.highlight}
              description={data.description}
              accent="leaf"
            />
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
          >
            {data.features.map((feature) => (
              <motion.li
                key={feature.title}
                variants={staggerItem}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl border border-slate-200 ${cardBg} p-6`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-leaf/10 text-leaf ring-1 ring-leaf/15">
                  {icon(feature.icon, "h-5 w-5")}
                </div>

                <h3 className="text-base font-semibold leading-snug text-ink">
                  {feature.title}
                </h3>
              </motion.li>
            ))}
          </motion.ul>

          {cta ? (
            <div className="mt-10 text-center">
              <CtaButton cta={cta} />
            </div>
          ) : null}
        </Container>
      </section>
    );
  }

  /* --------------------------------------------------
     VARIANTE AVEC IMAGE
     En-tête + image + fonctionnalités
  -------------------------------------------------- */

  const imageLeft = imageSide === "left";

  const textCol = imageLeft ? "lg:col-start-2" : "lg:col-start-1";

  const imageCol = imageLeft ? "lg:col-start-1" : "lg:col-start-2";

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`${sectionBg} py-16 sm:py-20 lg:py-24`}
    >
      <Container>
        <div className="grid gap-y-8 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-16 lg:gap-y-6">
          {/* En-tête de la section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`lg:row-start-1 lg:self-end ${textCol}`}
          >
            <SectionHeader
              id={titleId}
              eyebrow={data.tag}
              title={data.title}
              highlight={data.highlight}
              description={data.description}
              accent="leaf"
              align="left"
            />
          </motion.div>

          {/* Image illustrative */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`lg:row-span-2 lg:row-start-1 lg:self-center ${imageCol}`}
          >
            <div
              className={`flex items-center justify-center overflow-hidden rounded-3xl border border-slate-200 p-3 sm:p-4 ${
                gray ? "bg-white" : "bg-slate-100/70"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt ?? data.title}
                width={560}
                height={560}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className={`h-auto w-full max-w-none object-contain ${
                  float ? "animate-float" : ""
                }`}
              />
            </div>
          </motion.figure>

          {/* Liste des fonctionnalités */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className={`lg:row-start-2 lg:self-start ${textCol}`}
          >
            {featuresTitle ? (
              <motion.h3
                variants={staggerItem}
                className="mb-4 text-lg font-semibold tracking-tight text-ink"
              >
                {featuresTitle}
              </motion.h3>
            ) : null}

            <ul className="grid gap-3 sm:grid-cols-2">
              {data.features.map((feature) => (
                <motion.li
                  key={feature.title}
                  variants={staggerItem}
                  transition={{ duration: 0.4 }}
                  className={`flex items-center gap-3 rounded-xl border border-slate-200 ${cardBg} px-4 py-3 transition-colors duration-300 hover:border-leaf/40`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-leaf/10 text-leaf ring-1 ring-leaf/15">
                    {icon(feature.icon, "h-5 w-5")}
                  </span>

                  <span className="text-sm font-semibold leading-snug text-ink">
                    {feature.title}
                  </span>
                </motion.li>
              ))}
            </ul>

            {cta ? (
              <motion.div variants={staggerItem} className="mt-8">
                <CtaButton cta={cta} />
              </motion.div>
            ) : null}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
