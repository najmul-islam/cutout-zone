import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { title, excerpt, slug, card_media } = service;
  return (
    <Link
      href={`/service/${slug}`}
      aria-label={title}
      className="rounded bg-white p-6 text-center"
    >
      <Image
        src={`/service/${card_media}`}
        className="m-auto mb-3"
        width={370}
        height={246}
        alt={title}
        placeholder="blur"
        blurDataURL={`/service/${card_media}`}
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-[#09579F]">{title}</h1>
        <p className="text-[#404142]">{excerpt}</p>
        <p className="flex items-center justify-center gap-2 font-medium text-[#0254B1] hover:underline">
          Read more <FaArrowRight />
        </p>
      </div>
    </Link>
  );
};
export default ServiceCard;
