import { FaUpload } from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import Image from "next/image";
import Section from "./Section";
import Heading from "./Heading";

const FeatureSection = () => {
  return (
    <Section className="bg-white">
      <Heading
        title="Amazing features"
        description="CutOut Zone is simple, trustworthy, and reliable."
      />

      <div className="flex flex-col md:flex-row gap-5 py-6 items-center">
        <div className="flex flex-col gap-4">
          <FeatureCard
            icon={<FaUpload />}
            description="If you want to upload your images instantly, you can do that within a second, using our great web uploads features."
          />

          <FeatureCard
            icon={<FaUpload />}
            description="If you want to upload your images instantly, you can do that within a second, using our great web uploads features."
          />

          <FeatureCard
            icon={<FaUpload />}
            description="If you want to upload your images instantly, you can do that within a second, using our great web uploads features."
          />
        </div>

        <div className="p-3">
          <Image
            src="/service/Home-Feature-Box.jpg"
            width={800}
            height={800}
            alt="Home-Feature-Box"
          />
        </div>

        <div className="flex flex-col gap-4">
          <FeatureCard
            icon={<FaUpload />}
            description="If you want to upload your images instantly, you can do that within a second, using our great web uploads features."
          />

          <FeatureCard
            icon={<FaUpload />}
            description="If you want to upload your images instantly, you can do that within a second, using our great web uploads features."
          />

          <FeatureCard
            icon={<FaUpload />}
            description="If you want to upload your images instantly, you can do that within a second, using our great web uploads features."
          />
        </div>
      </div>
    </Section>
  );
};
export default FeatureSection;
