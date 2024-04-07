import CardSection from "@/components/pricing/CardSection";
import PricingPlanSection from "@/components/pricing/PricingPlanSection";

import LetsTrySeciton from "@/components/shared/LetsTrySeciton";
import SubHeader from "@/components/shared/SubHeader";

const PricingPage = () => {
  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/pricing", title: "Pricing" },
  ];
  return (
    <>
      <SubHeader
        imgUrl="Page-Price-Subheader.jpg"
        title="Pricing"
        links={links}
      />
      <PricingPlanSection />
      <CardSection />
      <LetsTrySeciton />
    </>
  );
};
export default PricingPage;
