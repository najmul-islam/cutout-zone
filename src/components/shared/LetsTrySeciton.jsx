import Link from "next/link";
import { FaRegEye } from "react-icons/fa";

const LetsTrySeciton = () => {
  return (
    <section
      className="bg-cover bg-no-repeat py-10"
      style={{ backgroundImage: "url(/hero/Element-BG-Try.jpg)" }}
    >
      <div className="container">
        <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
          Let’s experience the difference
        </h1>
        <p className="m-auto py-3 text-center text-white md:w-3/4">
          CutOut Zone is a place where your images will have a brand new look.
          Our professional designers are always creative and have superficial
          knowledge to bring an outstanding look in your portraits. What are you
          waiting for?
        </p>

        <Link
          className="m-auto flex w-48 items-center justify-center gap-2 text-nowrap rounded bg-[#0254B1] py-3 font-medium text-[#ffffff] hover:shadow-lg"
          href="/free-trial"
        >
          <FaRegEye />
          Let's try
        </Link>
      </div>
    </section>
  );
};
export default LetsTrySeciton;
