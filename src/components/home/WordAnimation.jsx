"use client";
import { Typewriter } from "react-simple-typewriter";

const WordAnimation = () => {
  return (
    <Typewriter
      cursor="true"
      loop
      cursorStyle="_"
      cursorColor="#0979E4"
      words={["Editing", "Retoucing", "Recoloring"]}
    />
  );
};
export default WordAnimation;
