import Section from "./Section";
import Heading from "./Heading";
import PricingCard from "./PricingCard";
import Link from "next/link";

const PricingSection = () => {
  return (
    <Section className="bg-white">
      <Heading title="Pricing" description="Cheap and Affordable Value" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <PricingCard
          imgUrl="Pricing-ClippingPath.png"
          title="Clipping Path"
          price="Starting at $0.29/per image"
        />

        <PricingCard
          imgUrl="Pricing-ShadowMaking.png"
          title="Shadow making"
          price="Starting at $0.49/per image"
        />

        <PricingCard
          imgUrl="Pricing-GhostMannequin.png"
          title="Ghost mannequin"
          price="Starting at $0.80/per image"
        />
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/pricing"
          className="bg-[#3c93a8] px-10 py-3 rounded text-white "
        >
          See all pricing
        </Link>
      </div>
    </Section>
  );
};
export default PricingSection;
