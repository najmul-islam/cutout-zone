import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceItem = ({ service }) => {
  const { title, slug, excerpt, card_media } = service;
  return (
    <Link
      href={`/service/${slug}`}
      aria-label={title}
      className="rounded border bg-white p-6 text-center hover:shadow"
    >
      <Image
        src={`/service/${card_media}`}
        className="m-auto mb-3"
        width={382}
        height={254}
        alt={title}
        placeholder="blur"
        blurDataURL={`/service/${card_media}`}
      />

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-[#0254B1] md:text-xl">{title}</h2>
        <p className="text-[#000000]">{excerpt}</p>
        <p className="flex items-center justify-center gap-2 font-medium text-[#0254B1] hover:underline">
          Read more <FaArrowRight />
        </p>
      </div>
    </Link>
  );
};
export default ServiceItem;
