"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaPaperclip,
  FaDrupal,
  FaRegImage,
  FaAdjust,
  FaRegLifeRing,
  FaCamera,
  FaTheaterMasks,
  FaPalette,
} from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-20 overflow-auto py-5">
      <ol className="">
        <li>
          <Link
            className={`flex items-center gap-4 rounded px-2 py-3 font-semibold hover:bg-[#F1F5F9] ${pathname === "/service/clipping-path" ? "bg-[#F1F5F9]" : "#fff"}`}
            href="/service/clipping-path"
            aria-label="clipping-path"
          >
            <span className="rounded-full bg-[#0095EB] p-5">
              <FaPaperclip className="text-xl text-[#fff]" />
            </span>
            Clipping Path
          </Link>
          <div className="border-r border-dashed"></div>
        </li>
        <li>
          <Link
            className={`flex items-center gap-4 rounded px-2 py-3 font-semibold hover:bg-[#F1F5F9] ${pathname === "/service/ghost-mannequin" ? "bg-[#F1F5F9]" : "#fff"}`}
            href="/service/ghost-mannequin"
            aria-label="ghost-mannequin"
          >
            <span className="rounded-full bg-[#0095EB] p-5">
              <FaDrupal className="text-xl text-[#fff]" />
            </span>
            Ghost mannequin
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-4 rounded px-2 py-3 font-semibold hover:bg-[#F1F5F9] ${pathname === "/service/photo-retouching" ? "bg-[#F1F5F9]" : "#fff"}`}
            href="/service/photo-retouching"
            aria-label="photo-retouching"
          >
            <span className="rounded-full bg-[#0095EB] p-5">
              <FaRegImage className="text-xl text-[#fff]" />
            </span>{" "}
            Photo retouching
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-4 rounded px-2 py-3 font-semibold hover:bg-[#F1F5F9] ${pathname === "/service/shadow-making" ? "bg-[#F1F5F9]" : "#fff"}`}
            href="/service/shadow-making"
            aria-label="/service/shadow-making"
          >
            <span className="rounded-full bg-[#0095EB] p-5">
              <FaAdjust className="text-xl text-[#fff]" />
            </span>{" "}
            Shadow Making
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-4 rounded px-2 py-3 font-semibold hover:bg-[#F1F5F9] ${pathname === "/service/jewelry-retouching" ? "bg-[#F1F5F9]" : "#fff"}`}
            href="/service/jewelry-retouching"
            aria-label="/service/jewelry-retouching"
          >
            <span className="rounded-full bg-[#0095EB] p-5">
              <FaRegLifeRing className="text-xl text-[#fff]" />
            </span>{" "}
            Jewelry Retouching
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-4 rounded px-2 py-3 font-semibold hover:bg-[#F1F5F9] ${pathname === "/service/headshot-retouching" ? "bg-[#F1F5F9]" : "#fff"}`}
            href="/service/headshot-retouching"
            aria-label="/service/headshot-retouching"
          >
            {" "}
            <span className="rounded-full bg-[#0095EB] p-5">
              <FaCamera className="text-xl text-[#fff]" />
            </span>{" "}
            Headshot Retouching
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-4 rounded px-2 py-3 font-semibold hover:bg-[#F1F5F9] ${pathname === "/service/image-masking" ? "bg-[#F1F5F9]" : "#fff"}`}
            href="/service/image-masking"
            aria-label="/service/image-masking"
          >
            {" "}
            <span className="rounded-full bg-[#0095EB] p-5">
              {" "}
              <FaTheaterMasks className="text-xl text-[#fff]" />
            </span>{" "}
            Image Masking
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-4 rounded px-2 py-3 font-semibold hover:bg-[#F1F5F9] ${pathname === "/service/color-correction" ? "bg-[#F1F5F9]" : "#fff"}`}
            href="/service/color-correction"
            aria-label="/service/color-correction"
          >
            <span className="rounded-full bg-[#0095EB] p-5">
              <FaPalette className="text-xl text-[#fff]" />
            </span>{" "}
            Color Correction
          </Link>
        </li>
        {/* <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li> */}
      </ol>
    </div>
  );
};
export default Sidebar;
