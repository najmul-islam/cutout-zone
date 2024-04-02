import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ imgUrl, title, description, url }) => {
  return (
    <div className="bg-white p-6 text-center rounded">
      <Image
        src={`/service/${imgUrl}`}
        className="m-auto"
        width={400}
        height={300}
        alt={title}
      />

      <div className="flex flex-col gap-4">
        <h4 className="font-medium text-lg">{title}</h4>
        <p className="text-[#3c93a8]">{description}</p>
        <Link
          href={url}
          className="flex text-[#3c93a8] gap-2 font-medium hover:underline justify-center items-center"
        >
          Read more <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};
export default ServiceCard;
