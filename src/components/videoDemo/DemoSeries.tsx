"use client";

import { motion } from "framer-motion";

import SectionHeader from "@/components/shared/SectionHeader";
import { fadeUp } from "@/lib/animation";
import type { DemoGroup } from "@/types";

import VideoCard from "./VideoCard";

type Props = {
  groupe: DemoGroup;

  numero: number;

  tone?: "white" | "gray";

  /** Fonction appelée lorsqu'une vidéo est sélectionnée */
  onOpen: (index: number) => void;
};

// Ajoute un zéro devant les nombres inférieurs à 10.
const pad = (nombre: number) => String(nombre).padStart(2, "0");

export default function DemoSeries({
  groupe,
  numero,
  tone = "white",
  onOpen,
}: Props) {
  // Identifiant utilisé pour relier le titre à sa section.
  const titleId = `${groupe.id}-title`;

  // Sélectionne la couleur de fond de la section.
  const sectionBg = tone === "gray" ? "bg-slate-50" : "bg-white";

  // Nombre de vidéos dans la série.
  const nombreVideos = groupe.videos.length;

  return (
    <section
      id={groupe.id}
      aria-labelledby={titleId}
      className={`${sectionBg} py-16 sm:py-20 lg:py-24`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* En-tête de la série */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <SectionHeader
            id={titleId}
            eyebrow={`${pad(numero)} — ${groupe.tag}`}
            title={groupe.titre}
            highlight={groupe.highlight}
            description={groupe.description}
            accent="leaf"
            align="left"
          />

          <p className="shrink-0 text-sm font-medium text-slate-500">
            {nombreVideos} {nombreVideos > 1 ? "vidéos" : "vidéo"}
          </p>
        </motion.div>

        {/* Liste des vidéos */}
        {nombreVideos > 0 ? (
          <div
            aria-label={`Vidéos de la série : ${groupe.tag}`}
            className="mt-10 grid grid-cols-1 justify-items-center gap-8 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {groupe.videos.map((video, index) => (
              <VideoCard
                key={video.url}
                numero={pad(index + 1)}
                titre={video.titre}
                description={video.description}
                url={video.url}
                poster={video.poster}
                apercu={video.apercu}
                onOpen={() => onOpen(index)}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-sm text-slate-500">
            Les démonstrations de cette série seront bientôt disponibles.
          </p>
        )}
      </div>
    </section>
  );
}
