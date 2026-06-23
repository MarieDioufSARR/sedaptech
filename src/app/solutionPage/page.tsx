import Camera from "@/components/sections/solution/Camera";
import { FaqSection } from "@/components/sections/solution/Faq";
import Marché from "@/components/sections/solution/Marché";
import Plateforme from "@/components/sections/solution/Plateforme";
import SolutionHeader from "@/components/sections/solution/SolutionHeader";
import SuiviTechnique from "@/components/sections/solution/SuiviTechnique";

export default function Solution() {
  return (
    <>
      <SolutionHeader />
      <Camera />
      <Plateforme />
      <Marché />
      <SuiviTechnique />
      <FaqSection />
    </>
  );
}
