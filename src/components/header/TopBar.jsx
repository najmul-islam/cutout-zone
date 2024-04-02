import Container from "../ui/Container";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="container">
      <nav className="hidden justify-between bg-white-900 py-2 duration-200 ease-in hover:ease-in md:flex">
        <a
          href="mailto:info@cutoutzone.com"
          className="flex items-center text-[14px] text-gray duration-200 ease-in hover:text-primary hover:ease-in"
        >
          <FaRegEnvelope className="mr-2" />
          info@cutoutzone.com
        </a>
        <ul className="flex items-center space-x-2">
          <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-200 ease-in hover:bg-primary hover:ease-in">
            <a href="https://www.facebook.com/thecutoutzone/" target="_blank">
              <FaFacebookF className="text-primary duration-200 ease-in hover:ease-in group-hover:text-white-900" />
            </a>
          </li>
          <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-200 ease-in hover:bg-primary hover:ease-in">
            <a href="https://www.instagram.com/the_CutOut_Zone" target="_blank">
              <FaInstagram className="text-primary duration-200 ease-in hover:ease-in group-hover:text-white-900" />
            </a>
          </li>
          <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-200 ease-in hover:bg-primary hover:ease-in">
            <a
              href="https://www.linkedin.com/company/the-cutout-zone/"
              target="_blank"
            >
              <FaLinkedinIn className="text-primary duration-200 ease-in hover:ease-in group-hover:text-white-900" />
            </a>
          </li>
          <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-200 ease-in hover:bg-primary hover:ease-in">
            <a href="https://twitter.com/theCutOutZone" target="_blank">
              <FaXTwitter className="text-primary duration-200 ease-in hover:ease-in group-hover:text-white-900" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default TopBar;
