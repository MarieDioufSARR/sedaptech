import Cible from "@/components/sections/home/Cible";
import Cta from "@/components/sections/home/Cta";
import HeroSection from "@/components/sections/home/HeroSection";
import Probleme from "@/components/sections/home/Probleme";
import Solution from "@/components/sections/home/Solution";
import Statistiques from "@/components/sections/home/Statistiques";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Statistiques />
      <Probleme />
      <Solution />
      <Cible />
      <Cta />
    </>
  );
}
