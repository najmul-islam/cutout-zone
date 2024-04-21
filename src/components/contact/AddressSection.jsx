import { FaGlobeAmericas, FaPhone, FaEnvelope, FaSkype } from "react-icons/fa";

const AddressSection = () => {
  return (
    <section className="bg-white py-14">
      <div className="container grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col items-center p-3 text-center">
          <span className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-[#0254B1] text-5xl text-white">
            <FaGlobeAmericas />
          </span>
          <h2 className="text-2xl font-semibold text-[#0254B1]">
            Bangladesh office
          </h2>
          <p>House # 6/1, Dhanmondi Dhaka – 1205 Bangladesh</p>
        </div>

        <div className="flex flex-col items-center p-3 text-center">
          <span className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-[#0254B1] text-5xl text-white">
            <FaGlobeAmericas />
          </span>
          <h2 className="text-2xl font-semibold text-[#0254B1]">
            Singapore office
          </h2>
          <p>Jalan Papan, 5A Jurong West – 619406 Singapore</p>
        </div>
        <div className="flex flex-col items-center p-3 text-center">
          <span className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-[#0254B1] text-5xl text-white">
            <FaPhone />
          </span>
          <h2 className="text-2xl font-semibold text-[#0254B1]">Call us</h2>
          <a
            href="tel:+880 1884-493280"
            className="py-2 transition-all duration-200 hover:text-[#0254B1] hover:underline md:py-0"
          >
            +880 1884-493280
          </a>
          <a
            href="tel:+65 8372-3755"
            className="py-2 transition-all duration-200 hover:text-[#0254B1] hover:underline md:py-0"
          >
            +65 8372-3755
          </a>
        </div>
        <div className="flex flex-col items-center p-3 text-center">
          <span className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-[#0254B1] text-5xl text-white">
            <FaEnvelope />
          </span>
          <h2 className="text-2xl font-semibold text-[#0254B1]">Email</h2>
          <a
            href="mailto:info@cutoutzone.com"
            className="py-2 transition-all duration-200 hover:text-[#0254B1] hover:underline md:py-0"
          >
            info@cutoutzone.com
          </a>
          <a
            href="mailto:infocutoutzone@gmail.com"
            className="py-2 transition-all duration-200 hover:text-[#0254B1] hover:underline md:py-0"
          >
            infocutoutzone@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-center p-3 text-center">
          <span className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-[#0254B1] text-5xl text-white">
            <FaSkype />
          </span>
          <h2 className="text-2xl font-semibold text-[#0254B1]">Skype</h2>
          <a
            href="skype:live:.cid.dc1927b7cdb7f390?call"
            className="py-2 transition-all duration-200 hover:text-[#0254B1] hover:underline md:py-0"
          >
            live:cutoutzone
          </a>
        </div>
      </div>
    </section>
  );
};
export default AddressSection;
