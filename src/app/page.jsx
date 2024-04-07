import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import ServiceSection from "@/components/home/ServiceSection";
import PricingSection from "@/components/home/PricingSection";
import WorkSection from "@/components/home/WorkSection";
import SkillSection from "@/components/home/SkillSection";
import ReasonSection from "@/components/home/ReasonSection";
import ActionSection from "@/components/shared/ActionSection";
import QuoteForam from "@/components/home/QuoteForam";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <PricingSection />
      <QuoteForam />
      <WorkSection />
      <SkillSection />
      <ReasonSection />
      <ActionSection />
    </>
  );
};
export default HomePage;
