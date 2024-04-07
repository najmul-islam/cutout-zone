import Link from "next/link";
import { FaPlay, FaQuoteRight } from "react-icons/fa";

const ActionSection = () => {
  return (
    <section className="bg-[#0979E4] py-16">
      <div className="container flex flex-col items-center justify-center gap-8 text-center md:flex-row md:justify-between md:text-start">
        <div className=" w-12/12 text-white lg:w-5/12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Start your journey today!
          </h2>
          <p className="">
            CutOut Zone Exceptional photo editing journey with a group, who are
            desperately waiting to take care of your portraits.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <Link
            className="flex items-center justify-center gap-2 text-nowrap rounded bg-[#ffffff] px-10 py-3 font-medium text-[#0979E4] transition-all hover:shadow-lg focus:outline-none focus:ring"
            href="/free-trial"
          >
            <FaPlay /> Free Trial
          </Link>

          <Link
            className="flex items-center justify-center gap-2 text-nowrap rounded border-2 border-[#ffffff] bg-transparent px-10 py-3 font-medium text-[#ffffff] hover:shadow-lg"
            href="/contact"
          >
            Free Quote
            <FaQuoteRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ActionSection;
