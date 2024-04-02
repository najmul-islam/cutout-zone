"use client";
import { useEffect, useRef } from "react";
import TypeJs from "typed.js";

const Typed = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new TypeJs(el.current, {
      strings: ["Editing", "Retoucing", "Recoloring"],
      typeSpeed: 200,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="py-[10px]">
      <h3 className="mr-1 inline-block text-xl font-bold md:text-3xl lg:text-4xl">
        Images{" "}
      </h3>
      <h3
        className=" inline-block text-xl font-bold md:text-3xl lg:text-4xl"
        ref={el}
      />
    </div>
  );
};
export default Typed;
