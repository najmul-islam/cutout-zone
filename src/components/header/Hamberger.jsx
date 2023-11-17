"use client";
import { useTheme } from "@/context/ThemeContext";
import { Menu } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const Hamberger = () => {
  const { handleSidebar } = useTheme();

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton onClick={handleSidebar} size="large">
        <Menu fontSize="16px" sx={{ color: "#fff" }} />
      </IconButton>
    </Box>
  );
};
export default Hamberger;
