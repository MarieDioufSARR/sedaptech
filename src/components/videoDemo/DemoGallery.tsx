"use client";

import { useCallback, useState } from "react";

import { siteConfig } from "@/content/siteConfig";

import DemoHero from "./DemoHero";
import DemoSeries from "./DemoSeries";
import VideoModal from "./VideoModal";

/**
 * Assemble la page Démonstrations à partir de siteConfig.demonstration :
 * - l'en-tête de présentation ;
 * - une section pour chaque série de vidéos ;
 * - une fenêtre de lecture commune avec navigation entre les vidéos.
 */
export default function DemoGallery() {
  const { header, groupes } = siteConfig.demonstration;

  // Mémorise les indices de la série et de la vidéo sélectionnées.
  const [current, setCurrent] = useState<{
    groupeIndex: number;
    videoIndex: number;
  } | null>(null);

  // Ferme la fenêtre de lecture.
  const close = useCallback(() => {
    setCurrent(null);
  }, []);

  // Gère le passage à la vidéo précédente ou suivante.
  const move = useCallback(
    (direction: number) => {
      setCurrent((selection) => {
        if (!selection) return null;

        const groupe = groupes[selection.groupeIndex];

        // Vérifie que la série sélectionnée existe.
        if (!groupe || groupe.videos.length === 0) {
          return null;
        }

        const total = groupe.videos.length;

        // Permet de revenir au début après la dernière vidéo,
        // ou de revenir à la dernière après la première.
        const nouvelIndex = (selection.videoIndex + direction + total) % total;

        return {
          ...selection,
          videoIndex: nouvelIndex,
        };
      });
    },
    [groupes]
  );

  // Fonctions dédiées aux boutons précédent et suivant.
  const prev = useCallback(() => move(-1), [move]);
  const next = useCallback(() => move(1), [move]);

  // Récupère la série actuellement sélectionnée.
  const groupeSelectionne = current
    ? groupes[current.groupeIndex] ?? null
    : null;

  // Récupère la vidéo actuellement sélectionnée.
  const videoSelectionnee =
    groupeSelectionne && current
      ? groupeSelectionne.videos[current.videoIndex] ?? null
      : null;

  // Vérifie si la série contient plusieurs vidéos.
  const peutNaviguer =
    groupeSelectionne !== null && groupeSelectionne.videos.length > 1;

  return (
    <>
      {/* En-tête de la page et raccourcis vers les séries */}
      <DemoHero
        tag={header.tag}
        titre={header.titre}
        highlight={header.highlight}
        description={header.description}
        liens={groupes.map((groupe) => ({
          id: groupe.id,
          verbe: groupe.verbe,
          tag: groupe.tag,
        }))}
      />

      {/* Affichage des différentes séries de vidéos */}
      {groupes.map((groupe, index) => (
        <DemoSeries
          key={groupe.id}
          groupe={groupe}
          numero={index + 1}
          tone={index % 2 === 0 ? "gray" : "white"}
          onOpen={(videoIndex) =>
            setCurrent({
              groupeIndex: index,
              videoIndex,
            })
          }
        />
      ))}

      {/* Fenêtre de lecture commune à toutes les séries */}
      <VideoModal
        video={videoSelectionnee}
        serie={groupeSelectionne?.tag}
        position={
          groupeSelectionne && current && videoSelectionnee
            ? `${current.videoIndex + 1} / ${groupeSelectionne.videos.length}`
            : undefined
        }
        cta={{
          label: "Échanger avec notre équipe",
          href: siteConfig.whatsapp,
        }}
        onClose={close}
        onPrev={peutNaviguer ? prev : undefined}
        onNext={peutNaviguer ? next : undefined}
      />
    </>
  );
}
