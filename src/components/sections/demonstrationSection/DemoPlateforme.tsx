"use client";

import { useState } from "react";

import DemoHero from "@/components/videoDemo/DemoHero";
import VideoCard from "@/components/videoDemo/VideoCard";
import VideoModal from "@/components/videoDemo/VideoModal";

const videos = [
  {
    titre: "Tableau de Bord Intelligent",
    description:
      "Découvrez le tableau de bord SedapTech permettant de suivre les indicateurs clés de votre exploitation en temps réel.",
    url: "/Videos/dashboard.mp4",
  },
  {
    titre: "Gestion des Élevages",
    description:
      "Visualisez l'ensemble de vos exploitations, consultez les données essentielles et pilotez vos activités depuis une seule plateforme.",
    url: "/Videos/elevage.mp4",
  },
  {
    titre: "Suivi des Investissements",
    description:
      "Suivez vos projets d'investissement, les performances financières et les indicateurs de rentabilité directement depuis votre espace personnel.",
    url: "/Videos/investissement.mp4",
  },
];

export default function DemoPlateforme() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="bg-white">
      <DemoHero
        badge="Plateforme Numérique"
        title="Découvrez la Plateforme SedapTech"
        description="Explorez les principales fonctionnalités de notre plateforme intelligente grâce à des démonstrations vidéo détaillées."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard
                key={video.titre}
                titre={video.titre}
                description={video.description}
                url={video.url}
                onOpen={setSelectedVideo}
              />
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </main>
  );
}
