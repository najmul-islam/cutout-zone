import { MdOutlineOpenInNew, MdOutlineZoomOutMap } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = ({ item }) => {
  const { imgUrl, title, slug } = item;
  return (
    <div className="rounded border">
      <div className="relative overflow-hidden rounded-t bg-cover bg-no-repeat">
        <Image
          src={`/portfolio/${imgUrl}`}
          alt={`${title}`}
          width={300}
          height={250}
          className="h-full w-full"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center gap-3 overflow-hidden bg-[#097ae4] opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center gap-3 overflow-hidden bg-transparent opacity-0 transition duration-300 ease-in-out hover:opacity-100">
          <button className="rounded-full bg-[#0979E4] p-3 text-2xl text-white transition-colors duration-300 ease-in-out hover:bg-[#097ae4ea]">
            <MdOutlineZoomOutMap />
          </button>
          <Link
            className="rounded-full bg-[#0979E4] p-3 text-2xl text-white transition-colors duration-300 ease-in-out hover:bg-[#097ae4ea]"
            href={`/portfolio/${slug}`}
          >
            <MdOutlineOpenInNew />
          </Link>
        </div>
      </div>

      <h4
        title={title}
        className="rounded-b bg-[#0979E4] py-5 text-center font-semibold text-white"
      >
        {title}
      </h4>
    </div>
  );
};
export default PortfolioItem;
