import PresenterSolution from "@/components/shared/PresenterSolution";
import { siteConfig } from "@/content/siteConfig";

export default function Plateforme() {
  const plateforme = siteConfig.solutionPage.plateforme;

  return (
    <PresenterSolution
      id="plateforme"
      data={plateforme}
      image={{
        src: "/Images/plateforme.png",
        alt: "Interface de la plateforme de gestion avicole SEDAP’Tech",
      }}
      featuresTitle="Les outils à votre disposition"
      imageSide="right"
      tone="gray"
      cta={{
        label: "Voir les vidéos de démonstration",
        href: "/demonstration",
      }}
    />
  );
}
