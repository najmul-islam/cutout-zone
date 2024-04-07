import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const SubHeader = ({ imgUrl, title, links }) => {
  return (
    <div className="relative z-0 h-52 bg-[#0979E4] bg-cover bg-center bg-no-repeat">
      <Image
        src={`/subheader/${imgUrl}`}
        alt={imgUrl}
        className="h-full w-full object-cover"
        width={1920}
        height={200}
      />
      <div className="absolute inset-0 bg-[#0979E4] opacity-80"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="mb-3 text-2xl font-semibold text-[#eeeeee] lg:text-4xl">
          {title}
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          {links?.map((item, index) => (
            <React.Fragment key={index}>
              {index < links.length - 1 ? (
                <Link
                  href={item.link}
                  title={item.title}
                  className="text-[#EEEEEE] hover:font-semibold hover:text-white"
                >
                  {item.title}
                </Link>
              ) : (
                <span title={item.title} className="font-semibold text-white">
                  {item.title}
                </span>
              )}

              {index < links.length - 1 && (
                <IoIosArrowForward className="text-white" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
