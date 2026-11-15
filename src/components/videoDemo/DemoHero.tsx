"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  /** Petit texte affiché au-dessus du titre */
  tag: string;

  /** Titre principal de la page */
  titre: string;

  /** Mot ou groupe de mots à mettre en évidence */
  highlight?: string;

  /** Texte de présentation */
  description: string;

  /** Raccourcis vers les différentes séries de vidéos */
  liens?: {
    id: string;
    verbe: string;
    tag: string;
  }[];
};

export default function DemoHero({
  tag,
  titre,
  highlight,
  description,
  liens,
}: Props) {
  // Détecte si l'utilisateur préfère réduire les animations.
  const prefersReducedMotion = useReducedMotion();

  // Prépare le titre pour mettre en évidence le mot souhaité.
  const positionHighlight =
    highlight && titre.includes(highlight) ? titre.indexOf(highlight) : -1;

  const titreAvant =
    positionHighlight >= 0 ? titre.slice(0, positionHighlight) : titre;

  const titreApres =
    positionHighlight >= 0
      ? titre.slice(positionHighlight + highlight!.length)
      : "";

  // Prépare les animations en respectant les préférences d'accessibilité.
  const animation = (y: number, delay: number) => ({
    initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.5,
      delay: prefersReducedMotion ? 0 : delay,
    },
  });

  return (
    <section
      aria-labelledby="demo-title"
      className="relative overflow-hidden bg-ink pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      {/* Lueur discrète pour apporter de la profondeur à l'arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent)]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Petit texte introductif */}
        <motion.p
          {...animation(12, 0)}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft sm:text-sm"
        >
          {tag}
        </motion.p>

        {/* Titre principal */}
        <motion.h1
          id="demo-title"
          {...animation(20, 0.08)}
          className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {positionHighlight >= 0 ? (
            <>
              {titreAvant}
              <span className="text-brand-soft">{highlight}</span>
              {titreApres}
            </>
          ) : (
            titre
          )}
        </motion.h1>

        {/* Description de la page */}
        <motion.p
          {...animation(20, 0.16)}
          className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          {description}
        </motion.p>

        {/* Raccourcis vers les séries de démonstrations */}
        {liens && liens.length > 0 && (
          <motion.nav
            aria-label="Accès rapide aux démonstrations"
            {...animation(20, 0.24)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            {liens.map((lien) => (
              <a
                key={lien.id}
                href={`#${lien.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                <span className="text-brand-soft">{lien.verbe}</span>

                <span aria-hidden="true" className="h-3 w-px bg-white/20" />

                {lien.tag}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </section>
  );
}
