"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Box } from "@mui/material";

const NavLink = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <Box
        component={Link}
        href="/"
        sx={{
          textDecoration: "none",
          paddingX: "18px",
          paddingY: "20px",
          display: "block",
          color: "white",
          fontSize: "16px",
          fontWeight: "500",
          background: pathname === "/" ? "#0A1619" : "",
          transition: "background 0.3s ease",
          "&:hover": {
            background: "#0A1619",
          },
        }}
      >
        Home
      </Box>
      <Box
        component={Link}
        href="/service"
        sx={{
          textDecoration: "none",
          paddingX: "18px",
          paddingY: "20px",
          display: "block",
          color: "white",
          fontSize: "16px",
          fontWeight: "500",
          background: pathname === "/service" ? "#0A1619" : "",
          transition: "background 0.3s ease",
          "&:hover": {
            background: "#0A1619",
          },
        }}
      >
        Service
      </Box>
      <Box
        component={Link}
        href="/free-trial"
        sx={{
          textDecoration: "none",
          paddingX: "18px",
          paddingY: "20px",
          display: "block",
          color: "white",
          fontSize: "16px",
          fontWeight: "500",
          background: pathname === "/free-trial" ? "#0A1619" : "",
          transition: "background 0.3s ease",
          "&:hover": {
            background: "#0A1619",
          },
        }}
      >
        Free Trial
      </Box>

      <Box
        component={Link}
        href="/pricing"
        sx={{
          textDecoration: "none",
          paddingX: "18px",
          paddingY: "20px",
          display: "block",
          color: "white",
          fontSize: "16px",
          fontWeight: "500",
          background: pathname === "/pricing" ? "#0A1619" : "",
          transition: "background 0.3s ease",
          "&:hover": {
            background: "#0A1619",
          },
        }}
      >
        Pricing
      </Box>

      <Box
        sx={{
          position: "relative",
          "&:hover": {
            "& .nested-box": {
              display: "block",
            },
          },
        }}
      >
        <Box
          component={Link}
          href="/about"
          sx={{
            textDecoration: "none",
            paddingX: "18px",
            paddingY: "20px",
            display: "block",
            color: "white",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            background: pathname === "/about" ? "#0A1619" : "",
            transition: "background display 0.3s ease",
            "&:hover": {
              background: "#0A1619",
              "& .nested-box": {
                display: "block",
              },
            },
          }}
        >
          About
        </Box>
        <Box
          className="nested-box"
          sx={{
            position: "absolute",
            display: "none",
            padding: "20px",
            top: "100%",
            left: -50,
            width: "300px",
            background: "#0A1619",
            color: "#fff",
            boxShadow: 1,

            // borderTop: "1px solid #1A1C20",
          }}
        >
          <Box
            component={Link}
            href="/portfolio"
            sx={{
              textDecoration: "none",
              paddingX: "18px",
              paddingY: "5px",
              display: "block",
              color: "white",
              fontSize: "14px",
              fontWeight: "400",
              background: pathname === "/portfolio" ? "#000000" : "",
              transition: "background 0.3s ease",
              "&:hover": {
                background: "#000000",
              },
            }}
          >
            Portfolio
          </Box>

          <Box
            component={Link}
            href="/blog"
            sx={{
              textDecoration: "none",
              paddingX: "18px",
              paddingY: "5px",
              display: "block",
              color: "white",
              fontSize: "14px",
              fontWeight: "400",
              background: pathname === "/blog" ? "#000000" : "",
              transition: "background 0.3s ease",
              "&:hover": {
                background: "#000000",
              },
            }}
          >
            Blog
          </Box>

          <Box
            component={Link}
            href="/faq"
            sx={{
              textDecoration: "none",
              paddingX: "18px",
              paddingY: "5px",
              display: "block",
              color: "white",
              fontSize: "14px",
              fontWeight: "400",
              background: pathname === "/faq" ? "#000000" : "",
              transition: "background 0.3s ease",
              "&:hover": {
                background: "#000000",
              },
            }}
          >
            FAQ
          </Box>

          <Box
            component={Link}
            href="/terms-of-service"
            sx={{
              textDecoration: "none",
              paddingX: "18px",
              paddingY: "5px",
              display: "block",
              color: "white",
              fontSize: "14px",
              fontWeight: "400",
              background: pathname === "/terms-of-service" ? "#000000" : "",
              transition: "background 0.3s ease",
              "&:hover": {
                background: "#000000",
              },
            }}
          >
            Terms of Service
          </Box>

          <Box
            component={Link}
            href="/privacy-policy"
            sx={{
              textDecoration: "none",
              paddingX: "18px",
              paddingY: "5px",
              display: "block",
              color: "white",
              fontSize: "14px",
              fontWeight: "400",
              background: pathname === "/privacy-policy" ? "#000000" : "",
              transition: "background 0.3s ease",
              "&:hover": {
                background: "#000000",
              },
            }}
          >
            Privacy Policy
          </Box>
        </Box>
      </Box>

      <Box
        component={Link}
        href="/contact"
        sx={{
          textDecoration: "none",
          paddingX: "18px",
          paddingY: "20px",
          display: "block",
          color: "white",
          fontSize: "16px",
          fontWeight: "500",
          background: pathname === "/contact" ? "#0A1619" : "",
          transition: "background 0.3s ease",
          "&:hover": {
            background: "#0A1619",
          },
        }}
      >
        Contact
      </Box>
    </Box>
  );
};
export default NavLink;
