import Image from "next/image";
import ActionButtons from "./ActionButtons";
import WordAnimation from "./WordAnimation";

const HeroSection = () => {
  return (
    <section className="bg-[url(/hero/home-hero-bg.jpg)] bg-cover bg-center py-5 min-h-[80vh]">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="mb-5 flex flex-col gap-3">
          <h3 className=" text-xl font-bold md:text-3xl lg:text-4xl">
            Are you looking for
          </h3>
          {/* <Typed /> */}
          <h3 className=" text-xl font-bold md:text-3xl lg:text-4xl">
            <WordAnimation />
          </h3>
          <h3 className="text-xl font-bold md:text-xl lg:text-xl">
            Your long Experienced Team can do That for you!
          </h3>
          <ActionButtons />
        </div>
        <div>
          <Image
            src="/hero/home-hero-girl.png"
            className="w-[]"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
