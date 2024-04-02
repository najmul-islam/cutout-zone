import Link from "next/link";
import { FaPlay, FaQuoteRight } from "react-icons/fa6";

const ActionButtons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <Link
        className="flex items-center gap-3 px-8 py-3 font-medium w-[200px] text-center text-black bg-[#3C93A8] rounded  hover:bg-[#47BB9B] focus:outline-none focus:ring transition-all"
        href="/free-trial"
      >
        <FaPlay className="text-white text-2xl group hover:text-black" /> Free
        Trial
      </Link>

      <Link
        className="flex items-center gap-3 px-8 py-3 font-medium w-[200px] text-center text-black bg-[#47BB9B] rounded hover:bg-[#3C93A8] focus:outline-none focus:ring transition-all group"
        href="/contact"
      >
        Free Quote
        <FaQuoteRight className="text-white text-2xl group hover:text-black" />
      </Link>
    </div>
  );
};
export default ActionButtons;
