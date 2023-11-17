"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import TypeJs from "typed.js";

const Typed = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new TypeJs(el.current, {
      strings: ["Editing", "Retoucing", "Recoloring"],
      typeSpeed: 100,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <Box sx={{ fontSize: "36px", fontWeight: "bold", paddingY: "10px" }}>
      <Typography
        display="inline-block"
        marginRight={2}
        variant="h2"
        fontSize={36}
        fontWeight="bold"
      >
        Images
      </Typography>
      <Typography
        display="inline-block"
        variant="h2"
        fontSize={36}
        fontWeight="bold"
        ref={el}
      />
    </Box>
  );
};
export default Typed;
