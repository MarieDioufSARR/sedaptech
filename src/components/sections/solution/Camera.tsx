import PresenterSolution from "@/components/shared/PresenterSolution";
import { siteConfig } from "@/content/siteConfig";

export default function Camera() {
  const camera = siteConfig.solutionPage.camera;

  return (
    <PresenterSolution
      id="camera"
      data={camera}
      image={{
        src: "/Images/camera1.png",
        alt: "Caméra connectée utilisée pour surveiller un élevage avicole",
      }}
      featuresTitle="Fonctionnalités principales"
      imageSide="left"
      tone="white"
      float
      cta={{
        label: "Voir les vidéos de démonstration",
        href: "/demonstration",
      }}
    />
  );
}
