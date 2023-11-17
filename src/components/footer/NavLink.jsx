"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";

const NavLink = () => {
  const pathname = usePathname();
  const links = [
    { id: 1, link: "/about", text: "About" },
    { id: 2, link: "/blog", text: "Blog" },
    { id: 3, link: "/portfolio", text: "Portfolio" },
    { id: 4, link: "/faq", text: "FAQ" },
    { id: 5, link: "/sitemap", text: "Sitemap" },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      {links.map((item) => {
        const isActive = pathname === item.link;
        return (
          <Box
            component={Link}
            href={item.link}
            sx={{
              display: "block",
              color: "white",
              marginLeft: "10px",
              fontSize: "14px",

              textDecoration: isActive ? "underline" : "none",
              transition: "all 0.3s ease",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {item.text}
          </Box>
        );
      })}
    </Box>
  );
};
export default NavLink;
