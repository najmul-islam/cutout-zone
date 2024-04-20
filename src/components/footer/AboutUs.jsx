import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div>
      <h2 className="mb-3 text-xl font-semibold text-[#0254B1]">About Us</h2>
      <p className="pr-4 text-sm text-[#404142]">
        CutOut Zone is a place where your images will have a brand new look. Our
        professional designers are always creative and have superficial
        knowledge to bring outstanding look in your portraits. What are you
        waiting for?
      </p>

      <h2 className="my-3 text-xl font-semibold text-[#0254B1]">Social link</h2>
      <ul className="flex items-center space-x-2">
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
          <a
            href="https://www.facebook.com/thecutoutzone/"
            target="_blank"
            aria-label="facebook"
          >
            <FaFacebookF className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
          <a
            href="https://www.instagram.com/the_CutOut_Zone"
            target="_blank"
            aria-label="instagram"
          >
            <FaInstagram className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)]  hover:ease-in">
          <a
            href="https://www.linkedin.com/company/the-cutout-zone/"
            target="_blank"
            aria-label="linkedin"
          >
            <FaLinkedinIn className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
          <a
            href="https://twitter.com/theCutOutZone"
            target="_blank"
            aria-label="twitter"
          >
            <FaXTwitter className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AboutUs;
