import CardSection from "@/components/pricing/CardSection";
import PricingPlanSection from "@/components/pricing/PricingPlanSection";
import LetsTrySeciton from "@/components/shared/LetsTrySeciton";
import SubHeader from "@/components/shared/SubHeader";

export const metadata = {
  title: "Photo Editing Plan and Pricing | Starting at $0.39/Image",
  description:
    "We have a different pricing list for different types of images. Before ordering you can have a free trial all the time. So, get started now!",
};

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
