import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import ServiceSection from "@/components/home/ServiceSection";
import PricingSection from "@/components/home/PricingSection";
import WorkSection from "@/components/home/WorkSection";
import SkillSection from "@/components/home/SkillSection";
import ReasonSection from "@/components/home/ReasonSection";
import ActionSection from "@/components/shared/ActionSection";
import QuoteForm from "@/components/home/QuoteForm";

export const metadata = {
  title: "Cut Out service | image excellence service provider",
  description:
    "CutOut Zone is one of the biggest image editing and graphic design companies in Asia. We have more than 7 years of working experience.",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <PricingSection />
      <QuoteForm />
      <WorkSection />
      <SkillSection />
      <ReasonSection />
      <ActionSection />
    </>
  );
};
export default HomePage;
