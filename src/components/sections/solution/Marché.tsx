import PresenterSolution from "@/components/shared/PresenterSolution";
import { siteConfig } from "@/content/siteConfig";

export default function Marche() {
  const market = siteConfig.solutionPage.market;

  return <PresenterSolution id="marche" data={market} tone="white" />;
}
