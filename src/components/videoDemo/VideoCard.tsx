"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

type Props = {
  numero: string;

  titre: string;

  description: string;

  url: string;

  poster?: string;

  apercu?: number;

  onOpen: () => void;
};

export default function VideoCard({
  numero,
  titre,
  description,
  url,
  poster,
  apercu = 1,
  onOpen,
}: Props) {
  // Détecte si l'utilisateur préfère limiter les animations.
  const prefersReducedMotion = useReducedMotion();

  // Désactive les déplacements et les effets de zoom si nécessaire.
  const animationInitiale = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 28 };

  return (
    <motion.article
      initial={animationInitiale}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
      className="group mx-auto w-full max-w-sm"
    >
      {/* Carte verticale au format story */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Lire la vidéo : ${titre}`}
        className="relative block aspect-[9/16] w-full overflow-hidden rounded-3xl bg-ink text-left shadow-[0_24px_50px_-28px_rgba(15,23,42,0.55)] ring-1 ring-ink/10 transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none motion-reduce:hover:translate-y-0 cursor-pointer"
      >
        {/* Aperçu vidéo : image fixe ou image extraite de la vidéo */}
        <video
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 "
          muted
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={`${url}#t=${apercu}`} type="video/mp4" />
        </video>

        {/* Dégradé sombre pour garantir la lisibilité du titre */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/25 to-ink/10"
        />

        {/* Numéro de la vidéo */}
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/40 px-3 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
          {numero}
        </span>

        {/* Bouton de lecture décoratif */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink shadow-xl transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-16 sm:w-16"
        >
          <Play className="h-6 w-6 translate-x-0.5 fill-current sm:h-7 sm:w-7" />
        </span>

        {/* Titre de la démonstration */}
        <span className="absolute inset-x-0 bottom-0 block p-5">
          <span className="block text-base font-semibold leading-snug text-white sm:text-[1.0625rem]">
            {titre}
          </span>
        </span>
      </button>

      {/* Description de la démonstration */}
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </motion.article>
  );
}
