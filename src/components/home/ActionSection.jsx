import Link from "next/link";
import Section from "./Section";
import { FaPlay, FaQuoteRight } from "react-icons/fa";

const ActionSection = () => {
  return (
    <Section className="bg-[url(/hero/Element-BG-Try.jpg)] bg-cover bg-center">
      <div className="container flex flex-col md:flex-row justify-center md:justify-between text-center md:text-start items-center gap-8">
        <div className=" text-white w-12/12 lg:w-5/12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Start your journey today!
          </h2>
          <p className="">
            CutOut Zone Exceptional photo editing journey with a group, who are
            desperately waiting to take care of your portraits.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <Link
            className="flex items-center gap-3 px-8 py-3 font-medium w-[200px] text-center text-black bg-[#3C93A8] rounded  hover:bg-[#47BB9B] focus:outline-none focus:ring transition-all"
            href="/free-trial"
          >
            <FaPlay className="text-white text-2xl group hover:text-black" />{" "}
            Free Trial
          </Link>

          <Link
            className="flex items-center gap-3 px-8 py-3 font-medium w-[200px] text-center text-black bg-[#47BB9B] rounded hover:bg-[#3C93A8] focus:outline-none focus:ring transition-all group"
            href="/contact"
          >
            Free Quote
            <FaQuoteRight className="text-white text-2xl group hover:text-black" />
          </Link>
        </div>
      </div>
    </Section>
  );
};
export default ActionSection;
