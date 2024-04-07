import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div>
      <h6 className="mb-3 text-xl font-semibold text-[#0979E4]">About Us</h6>
      <p className="pr-4 text-sm text-[#8b8d94]">
        CutOut Zone is a place where your images will have a brand new look. Our
        professional designers are always creative and have superficial
        knowledge to bring outstanding look in your portraits. What are you
        waiting for?
      </p>

      <h6 className="my-3 text-xl font-semibold text-[#0979E4]">Social link</h6>
      <ul className="flex items-center space-x-2">
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
          <a href="https://www.facebook.com/thecutoutzone/" target="_blank">
            <FaFacebookF className="group-hover:text-white-900 text-[#0979E4] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
          <a href="https://www.instagram.com/the_CutOut_Zone" target="_blank">
            <FaInstagram className="group-hover:text-white-900 text-[#0979E4] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)]  hover:ease-in">
          <a
            href="https://www.linkedin.com/company/the-cutout-zone/"
            target="_blank"
          >
            <FaLinkedinIn className="group-hover:text-white-900 text-[#0979E4] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
          <a href="https://twitter.com/theCutOutZone" target="_blank">
            <FaXTwitter className="group-hover:text-white-900 text-[#0979E4] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AboutUs;
