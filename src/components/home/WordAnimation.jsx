"use client";
import { Typewriter } from "react-simple-typewriter";

const WordAnimation = () => {
  return (
    <Typewriter
      cursor="true"
      loop
      words={["Editing", "Retoucing", "Recoloring"]}
    />
  );
};
export default WordAnimation;
