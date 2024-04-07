import Link from "next/link";
import { FaPlay, FaQuoteRight } from "react-icons/fa6";

const ActionButtons = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <Link
        className="flex items-center justify-center gap-2 text-nowrap rounded bg-[#0979E4] px-10 py-3 font-medium text-white transition-all hover:bg-[#097ae4ea] hover:shadow-lg focus:outline-none focus:ring"
        href="/free-trial"
      >
        <FaPlay /> Free Trial
      </Link>

      <Link
        className="flex items-center justify-center gap-2 text-nowrap rounded border-2 border-[#0979E4] bg-transparent px-10 py-3 font-medium text-black hover:shadow-lg"
        href="/contact"
      >
        Free Quote
        <FaQuoteRight />
      </Link>
    </div>
  );
};
export default ActionButtons;
