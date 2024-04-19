import Link from "next/link";
import { IoMailOutline, IoVideocamOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <h6 className="mb-3 text-xl font-semibold text-[#0254B1]">Contact</h6>
      <ul className="flex flex-col gap-2">
        <li className="transition duration-200 hover:text-[#0254B1] hover:underline">
          <Link
            href="mailto:info@cutoutzone.com"
            className="flex items-center gap-2"
            aria-label="email"
          >
            <IoMailOutline className="text-xl text-[#0254B1]" />
            info@cutoutzone.com
          </Link>
        </li>
        <li className="transition duration-200 hover:text-[#0254B1] hover:underline">
          <Link
            href="mailto:infocutoutzone@gmail.com"
            className="flex items-center gap-2"
            aria-label="gmail"
          >
            <IoMailOutline className="text-xl text-[#0254B1]" />
            infocutoutzone@gmail.com
          </Link>
        </li>
        <li className="transition-all duration-200 hover:text-[#0254B1] hover:underline">
          <Link
            href="skype:live:CutOutZone?chat"
            className="flex items-center gap-2"
            aria-label="skype"
          >
            <IoVideocamOutline className="text-xl text-[#0254B1]" />
            live:cutoutzone
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Contact;
