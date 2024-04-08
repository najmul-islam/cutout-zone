import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SinglePortfolio = ({ portfolio, prevPortfolio, nextPortfolio }) => {
  return (
    <div className="container flex flex-col gap-10 py-10">
      <div className="m-auto max-w-[600px] rounded border">
        <Image
          src={`/portfolio/${portfolio.featured_media}`}
          alt={portfolio.title}
          width={600}
          height={600}
          className="m-auto h-full w-full"
        />
        <h2 className="bg-[#0979E4] px-3 py-2 text-center text-lg font-semibold text-white opacity-90 md:text-2xl">
          {portfolio.title}
        </h2>
      </div>

      <div className="m-auto flex items-center justify-between gap-4 border-b border-t py-2">
        <Link
          href={`/portfolio/${prevPortfolio.slug}`}
          className="flex items-center text-sm font-bold transition-all duration-100 hover:text-[#0979E4] hover:underline"
        >
          <IoIosArrowBack className="" /> Previous
          {/* <span>{prevPortfolio.title}</span> */}
        </Link>

        <Link
          href={`/portfolio/${nextPortfolio.slug}`}
          className="flex items-center text-sm font-bold transition-all duration-100 hover:text-[#0979E4] hover:underline"
        >
          {/* {nextPortfolio.title} */} Next
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};
export default SinglePortfolio;
