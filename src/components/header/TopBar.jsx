import Link from "next/link";
import {
  Container,
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const TopBar = () => {
  return (
    <AppBar
      component="nav"
      position="static"
      sx={{
        background: "#fff",
        transition: "height 1s ease",
        display: { md: "flex", xs: "none" },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          variant="string"
          sx={{
            display: "flex",
            paddingX: "10px",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="a"
            href="mailto:info@cutoutzone.com"
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              textDecoration: "none",
              fontSize: "16px",
              color: "#b1b4b8",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#4493A7",
              },
            }}
          >
            <EmailOutlined fontSize="20px" sx={{ marginRight: "3px" }} />{" "}
            info@cutoutzone.com
          </Box>
          <Stack direction="row">
            <IconButton
              component={Link}
              href="https://www.facebook.com/thecutoutzone/"
              target="_blank"
              size="small"
            >
              <Facebook
                sx={{
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#4493A7",
                  },
                }}
              />
            </IconButton>

            <IconButton
              component={Link}
              href="https://www.instagram.com/the_CutOut_Zone"
              target="_blank"
              size="small"
            >
              <Instagram
                sx={{
                  "&:hover": {
                    transition: "color 0.3s ease",
                    color: "#4493A7",
                  },
                }}
              />
            </IconButton>

            <IconButton
              component={Link}
              href="https://www.linkedin.com/company/the-cutout-zone/"
              target="_blank"
              size="small"
            >
              <LinkedIn
                sx={{
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#4493A7",
                  },
                }}
              />
            </IconButton>

            <IconButton
              component={Link}
              href="https://twitter.com/theCutOutZone"
              target="_blank"
              size="small"
            >
              <Twitter
                sx={{
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#4493A7",
                  },
                }}
              />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;
