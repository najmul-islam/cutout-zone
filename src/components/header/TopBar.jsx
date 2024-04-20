import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="border-b bg-white">
      <nav className="bg-white-900 container hidden justify-between bg-white py-2 duration-100 ease-in hover:ease-in md:flex">
        <a
          href="mailto:info@cutoutzone.com"
          aria-label="email"
          className="text-gray flex items-center text-[14px] duration-200 ease-in hover:text-[#0254B1] hover:ease-in"
        >
          <FaRegEnvelope className="mr-2" />
          info@cutoutzone.com
        </a>
        <ul className="flex items-center space-x-2">
          <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
            <a
              href="https://www.facebook.com/thecutoutzone/"
              aria-label="facebook"
              target="_blank"
            >
              <FaFacebookF className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
            </a>
          </li>
          <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
            <a
              href="https://www.instagram.com/the_CutOut_Zone"
              aria-label="instagram"
              target="_blank"
            >
              <FaInstagram className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
            </a>
          </li>
          <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)]  hover:ease-in">
            <a
              href="https://www.linkedin.com/company/the-cutout-zone/"
              aria-label="linkedin"
              target="_blank"
            >
              <FaLinkedinIn className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
            </a>
          </li>
          <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
            <a
              href="https://twitter.com/theCutOutZone"
              aria-label="twitter"
              target="_blank"
            >
              <FaXTwitter className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default TopBar;
