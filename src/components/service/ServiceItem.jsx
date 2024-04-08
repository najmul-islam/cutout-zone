import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceItem = ({ service }) => {
  const { title, slug, excerpt, featured_media } = service;
  return (
    <Link
      href={`/service/${slug}`}
      className="rounded border bg-white p-6 text-center hover:shadow"
    >
      <Image
        src={`/service/${featured_media}`}
        className="m-auto mb-3"
        width={400}
        height={300}
        alt={title}
      />

      <div className="flex flex-col gap-4">
        <h4 className="text-xl font-bold text-[#0979E4]">{title}</h4>
        <p className="text-[#999999]">{excerpt}</p>
        <Link
          href={`/service/${slug}`}
          className="flex items-center justify-center gap-2 font-medium text-[#0979E4] hover:underline"
        >
          Read more <FaArrowRight />
        </Link>
      </div>
    </Link>
  );
};
export default ServiceItem;
