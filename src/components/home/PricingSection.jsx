import Section from "./Section";
import Heading from "./Heading";
import PricingCard from "./PricingCard";
import Link from "next/link";

const PricingSection = () => {
  return (
    <Section className="bg-white">
      <Heading title="Pricing" description="Cheap and Affordable Value" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
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

      <div className="mt-10 flex justify-center">
        <Link
          href="/pricing"
          className="rounded bg-[#0254B1] px-4 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:shadow-md"
        >
          See all pricing
        </Link>
      </div>
    </Section>
  );
};
export default PricingSection;
