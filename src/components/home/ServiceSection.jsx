import services from "@/data/serviceData.json";
import Heading from "./Heading";
import Section from "./Section";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <Section className="bg-[#F8F8F8]">
      <Heading
        title="Awesome & Great Services"
        description="Our service is simple, reliable, and flexible."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}

        {/* <ServiceCard
          imgUrl="Homepage-ClippingPath-BackgroundRemove-v2106.jpg"
          title="Clipping Path"
          description="Clipping path is a crucial photo editing the technique helps to remove the background."
          url="/service/clipping-path"
        />

        <ServiceCard
          imgUrl="Homepage-ShadowMaking-v2106.jpg"
          title="Shadow Making"
          description="Shadow creation Services form a natural look professional look that enables the quality and branding of any business."
          url="/service/shadow-creation"
        />

        <ServiceCard
          imgUrl="Homepage-Masking-v2106.jpg"
          title="Image Masking"
          description="There are several types of photoshop image masking services such as hair masking."
          url="/service/image-masking"
        />

        <ServiceCard
          imgUrl="Homepage-PhotoRetouching-v2106.jpg"
          title="Photo Retouching"
          description="It includes Remove Skin Spots, Wrinkle reduction, Blemish Remove."
          url="/service/photo-retouching"
        />
        <ServiceCard
          imgUrl="Homepage-JewelryRetouching-v2106.jpg"
          title="Jewelry Retouching"
          description="Photoshop Jewelry Retouching Service makes a jewelry photo look shiny. This increases the attraction of customers."
          url="/service/jewelry-retouching"
        />

        <ServiceCard
          imgUrl="Homepage-ECommerceImageSolution-v2106.jpg"
          title="E-Commerce Image Solution"
          description="Best E-Commerce Product Image Solution is essential for any online shops."
          url="/service/e-commerce-photo-editing"
        /> */}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/service"
          className="rounded bg-[#0254B1] px-4 py-3 text-sm font-semibold uppercase tracking-widest  text-white hover:shadow-md"
        >
          More service
        </Link>
      </div>
    </Section>
  );
};
export default ServiceSection;
