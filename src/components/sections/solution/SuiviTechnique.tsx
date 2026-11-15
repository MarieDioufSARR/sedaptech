import PresenterSolution from "@/components/shared/PresenterSolution";
import { siteConfig } from "@/content/siteConfig";

export default function SuiviTechnique() {
  const suiviTechnique = siteConfig.solutionPage.suiviTechnique;

  return (
    <PresenterSolution id="suivi-technique" data={suiviTechnique} tone="gray" />
  );
}
