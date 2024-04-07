import BottomBar from "./BottomBar";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import Address from "./Address";

const Footer = () => {
  return (
    <>
      <div className="bg-[#EEEEEE]">
        <div className="container grid grid-cols-1 gap-5 py-4 md:grid-cols-2 lg:grid-cols-4">
          <AboutUs />
          <Services />
          <Contact />
          <Address />
        </div>
        <BottomBar />
      </div>
    </>
  );
};
export default Footer;
