import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SinglePortfolio = ({ portfolio, prevPortfolio, nextPortfolio }) => {
  const { featured_media, title, description } = portfolio;
  return (
    <div className="container flex flex-col items-center gap-5 py-10">
      <div className="max-w-lg">
        <h2 className="py-2 text-center text-lg font-semibold text-black opacity-90 md:text-2xl">
          {title}
        </h2>
        <p className="mb-5 text-center">{description}</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Link
          title="Prev"
          href={`/portfolio/${prevPortfolio.slug}`}
          aria-label={prevPortfolio.slug}
          className="flex items-center rounded-full bg-[#0254B1] p-2 text-xl font-bold text-white transition-all duration-100"
        >
          <IoIosArrowBack className="" />
        </Link>
        <Image
          src={`/portfolio/${featured_media}`}
          alt={portfolio.title}
          width={600}
          height={600}
          className="m-auto h-[100%] w-[90%] rounded border md:h-full md:w-full"
        />
        <Link
          title="Next"
          href={`/portfolio/${nextPortfolio.slug}`}
          aria-label={nextPortfolio.slug}
          className="flex items-center rounded-full bg-[#0254B1] p-2 text-xl font-bold text-white transition-all duration-100"
        >
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};
export default SinglePortfolio;
