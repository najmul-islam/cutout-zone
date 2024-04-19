import Image from "next/image";
import ActionButtons from "./ActionButtons";
import WordAnimation from "./WordAnimation";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-t from-white via-[#F1F1F1] to-white">
      <div className="container flex flex-col items-center justify-between gap-12 py-10 lg:flex-row">
        <div className="flex flex-col gap-5 md:mb-0">
          <h3 className="text-nowrap text-4xl md:text-5xl">
            Are you looking for
          </h3>
          <h3 className="text-3xl font-medium text-[#0254B1] md:text-4xl">
            <WordAnimation />
          </h3>
          <h3 className="text-pretty text-[#404142]">
            Your long Experienced Team can do That for you!
          </h3>
          <ActionButtons />
        </div>
        <div className="rounded-full bg-[#5FA7EE]">
          <Image
            src="/hero/home-hero-girl.png"
            // className="w-auto h-auto"
            className=""
            width={700}
            height={700}
            alt="home-hero-girl"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
