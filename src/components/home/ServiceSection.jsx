import Heading from "./Heading";
import Section from "./Section";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <Section className="bg-[#F1F1F1]">
      <Heading
        title="Awesome & Great Services"
        description="Our service is simple, reliable, and flexible."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <ServiceCard
          imgUrl="Homepage-ClippingPath-BackgroundRemove-v2106.jpg"
          title="Clipping Path"
          description="Clipping path is a crucial photo editing the technique helps to remove the background."
          url="/service/clipping-path"
        />

        <ServiceCard
          imgUrl="Homepage-ClippingPath-BackgroundRemove-v2106.jpg"
          title="Clipping Path"
          description="Clipping path is a crucial photo editing the technique helps to remove the background."
          url="/service/clipping-path"
        />

        <ServiceCard
          imgUrl="Homepage-ClippingPath-BackgroundRemove-v2106.jpg"
          title="Clipping Path"
          description="Clipping path is a crucial photo editing the technique helps to remove the background."
          url="/service/clipping-path"
        />

        <ServiceCard
          imgUrl="Homepage-ClippingPath-BackgroundRemove-v2106.jpg"
          title="Clipping Path"
          description="Clipping path is a crucial photo editing the technique helps to remove the background."
          url="/service/clipping-path"
        />
        <ServiceCard
          imgUrl="Homepage-ClippingPath-BackgroundRemove-v2106.jpg"
          title="Clipping Path"
          description="Clipping path is a crucial photo editing the technique helps to remove the background."
          url="/service/clipping-path"
        />

        <ServiceCard
          imgUrl="Homepage-ClippingPath-BackgroundRemove-v2106.jpg"
          title="Clipping Path"
          description="Clipping path is a crucial photo editing the technique helps to remove the background."
          url="/service/clipping-path"
        />
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/service"
          className="bg-[#3c93a8] px-10 py-3 rounded text-white "
        >
          More service
        </Link>
      </div>
    </Section>
  );
};
export default ServiceSection;
