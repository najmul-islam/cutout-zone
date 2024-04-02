import Image from "next/image";
import Section from "./Section";
import Heading from "./Heading";
import {
  FaClock,
  FaGlobeAsia,
  FaRegLifeRing,
  FaRegListAlt,
  FaRegMoneyBillAlt,
  FaRev,
} from "react-icons/fa";
import ReasonCard from "./ReasonCard";

const ReasonSection = () => {
  return (
    <Section className="bg-[#f1f1f1]">
      <Heading
        title="Top reason to choose us"
        description="We are one of the best Cut Out service provider around the world."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 align-middle items-center">
        <Image src="/reason/Page-Home-GP-Reason.png" width={600} height={600} />

        <ul className="flex flex-col gap-3">
          <ReasonCard
            icon={<FaRegMoneyBillAlt />}
            description="Best service at an affordable price."
          />

          <ReasonCard
            icon={<FaGlobeAsia />}
            description="Maintaining international standard."
          />
          <ReasonCard
            icon={<FaRev />}
            description="Revision request options."
          />
          <ReasonCard
            icon={<FaRegLifeRing />}
            description="Quick customer care services."
          />
          <ReasonCard
            icon={<FaRegListAlt />}
            description="Flexible service and discount for bulk images."
          />
          <ReasonCard
            icon={<FaClock />}
            description="24 hours, 365 days of online support."
          />
        </ul>
      </div>
    </Section>
  );
};
export default ReasonSection;
