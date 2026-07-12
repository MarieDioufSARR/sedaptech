"use client";

import { PlayCircle, X } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    titre: "Présentation de la Caméra Intelligente SedapTech",
    description:
      "Découvrez comment notre caméra connectée permet la surveillance et le suivi en temps réel des activités agricoles et d’élevage.",
    url: "/videos/cameraconnecté.mp4",
  },
  {
    titre: "Monitoring en Temps Réel d’une Exploitation Agricole",
    description:
      "Visualisez les données terrain, surveillez vos infrastructures et améliorez la gestion de votre exploitation grâce à nos solutions intelligentes.",
    url: "/videos/cameravideo.mp4",
  },
  {
    titre: "Déploiement et Installation à Mbour",
    description:
      "Retour sur une intervention terrain illustrant la mise en place de notre système de surveillance et d’analyse au sein d’une exploitation agricole.",
    url: "/videos/installationday.mp4",
  },
];

export default function DemoCamera() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-500">
            Démonstrations Vidéo
          </span>

          <h1 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900">
            Découvrez SedapTech en Action
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Explorez nos solutions innovantes à travers des démonstrations
            concrètes réalisées sur le terrain.
          </p>
        </div>
      </section>

      {/* Liste des vidéos */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.titre}
                className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Aperçu vidéo */}
                <div className="mx-auto max-w-[320px] md:max-w-auto overflow-hidden rounded-3xl shadow-md">
                  <div className="aspect-9/16 md:aspect-video lg:aspect-9/16">
                    <video controls className="h-full w-full object-cover">
                      <source src={video.url} type="video/mp4" />
                      Votre navigateur ne supporte pas les vidéos.
                    </video>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-start gap-3">
                    <PlayCircle className="mt-1 h-6 w-6 shrink-0 text-red-500" />

                    <h2 className="text-xl font-bold text-gray-900">
                      {video.titre}
                    </h2>
                  </div>

                  <p className="mt-4 leading-relaxed text-center text-gray-600">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Vidéo */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -right-3 -top-3 z-10 rounded-full bg-white p-2 shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Vidéo grand format */}
            <div className="max-h-[90vh] w-95 overflow-hidden rounded-3xl bg-black md:w-112.5">
              <video controls autoPlay className="h-full w-full">
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
