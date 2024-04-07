import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ imgUrl, title, description, url }) => {
  return (
    <div className="rounded bg-white p-6 text-center">
      <Image
        src={`/service/${imgUrl}`}
        className="m-auto mb-3"
        width={400}
        height={300}
        alt={title}
      />

      <div className="flex flex-col gap-4">
        <h4 className="text-xl font-bold text-[#0979E4]">{title}</h4>
        <p className="text-[#999999]">{description}</p>
        <Link
          href={url}
          className="flex items-center justify-center gap-2 font-medium text-[#0979E4] hover:underline"
        >
          Read more <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};
export default ServiceCard;
