"use client";

import { useState } from "react";

import DemoHero from "@/components/videoDemo/DemoHero";
import VideoCard from "@/components/videoDemo/VideoCard";
import VideoModal from "@/components/videoDemo/VideoModal";

const videos = [
  {
    titre: "Présentation de la Caméra Intelligente SedapTech",
    description:
      "Découvrez comment notre caméra connectée permet la surveillance et le suivi en temps réel des activités agricoles et d'élevage.",
    url: "/Videos/cameraconnecté.mp4",
  },
  {
    titre: "Monitoring en Temps Réel d'une Exploitation Agricole",
    description:
      "Visualisez les données terrain, surveillez vos infrastructures et améliorez la gestion de votre exploitation grâce à nos solutions intelligentes.",
    url: "/Videos/cameravideo.mp4",
  },
  {
    titre: "Déploiement et Installation à Mbour",
    description:
      "Retour sur une intervention terrain illustrant la mise en place de notre système de surveillance et d'analyse au sein d'une exploitation agricole.",
    url: "/Videos/installationday.mp4",
  },
];

export default function DemoCamera() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="bg-white">
      <DemoHero
        badge="Démonstrations Vidéo"
        title="Découvrez SedapTech en Action"
        description="Explorez nos solutions innovantes à travers des démonstrations concrètes réalisées sur le terrain."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
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
