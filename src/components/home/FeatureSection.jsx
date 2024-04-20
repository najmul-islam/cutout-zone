import {
  FaPaintBrush,
  FaRegClock,
  FaShieldAlt,
  FaSmile,
  FaUpload,
  FaUsers,
} from "react-icons/fa";
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

      <div className="flex flex-col items-center gap-5 py-6 md:flex-row">
        <div className="flex flex-col gap-4">
          <FeatureCard
            icon={<FaUpload />}
            description="If you want to upload your images instantly, you can do that within a second, using our great web uploads features."
          />

          <FeatureCard
            icon={<FaPaintBrush />}
            description="We never compromise with its quality standard. Our professional experienced designers are committed to maintaining the international standard."
          />

          <FeatureCard
            icon={<FaRegClock />}
            description="As our employee strength is strong, we can complete your appointed task in time. You don’t have to worry about that."
          />
        </div>

        <div className="p-3">
          <Image
            src="/service/Home-Feature-Box.webp"
            width={800}
            height={800}
            alt="Home-Feature-Box"
          />
        </div>

        <div className="flex flex-col gap-4">
          <FeatureCard
            icon={<FaUsers />}
            description="	There are 50 skilled designers with long experience who are capable of processing 1000 images in a week."
          />

          <FeatureCard
            icon={<FaSmile />}
            description="	Our professional designers work hard and spend a lot of time to bring perfection in every part of your portraits which will make you happy & satisfied."
          />

          <FeatureCard
            icon={<FaShieldAlt />}
            description="Confidentiality and security of images, data is our first and foremost priority. So you can rely and bank on us."
          />
        </div>
      </div>
    </Section>
  );
};
export default FeatureSection;
