import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { title, excerpt, slug, card_media } = service;
  return (
    <Link
      href={`/service/${slug}`}
      aria-label={slug}
      className="rounded bg-white p-6 text-center"
    >
      <Image
        src={`/service/${card_media}`}
        className="m-auto mb-3"
        width={400}
        height={300}
        alt={title}
      />

      <div className="flex flex-col gap-4">
        <h4 className="text-xl font-bold text-[#09579F]">{title}</h4>
        <p className="text-[#404142]">{excerpt}</p>
        <Link
          href={`/service/${slug}`}
          aria-label={slug}
          className="flex items-center justify-center gap-2 font-medium text-[#0254B1] hover:underline"
        >
          Read more <FaArrowRight />
        </Link>
      </div>
    </Link>
  );
};
export default ServiceCard;
