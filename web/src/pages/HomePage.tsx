import HeroSection from "../components/layout/HeroSection";
import PotentialHousingCallout from "../components/common/PotentialHousingCallout";
import IntroSection from "../components/common/IntroSection";
import HousingAccordions from "../components/common/HousingAccordions";
import StartButton from "../components/common/StartButton";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <IntroSection />

      <HousingAccordions />

      <PotentialHousingCallout />

      <StartButton />
    </>
  );
}
