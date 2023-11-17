"use client";
import { useTheme } from "@/context/ThemeContext";
import {
  Close,
  CloseRounded,
  Draw,
  EmailOutlined,
  ExpandMore,
  Facebook,
  Gavel,
  Home,
  Https,
  Inbox,
  Info,
  Instagram,
  LinkedIn,
  LocalAtm,
  Mail,
  MedicalServices,
  MenuBook,
  More,
  PermContactCalendar,
  Quiz,
  Twitter,
  Whatshot,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import Link from "next/link";
import SideBarListItem from "./SideBarListItem";
import { useState } from "react";

const SideBar = () => {
  const { sidebar, handleSidebar, drawerWidth, selectedUrl } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      component="aside"
      sx={{
        width: `${drawerWidth}px`,
        display: { md: "none" },
      }}
    >
      <Drawer
        anchor="right"
        variant="persistent"
        open={sidebar}
        onClose={handleSidebar}
        sx={{
          display: { md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: (theme) => theme.palette.background.default,
          },
          "& .MuiDrawer-paper::-webkit-scrollbar": {
            width: "5px",
          },
          "& .MuiDrawer-paper::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdc3c7",
            borderRadius: "5px",
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{ display: "flex", paddingX: "10px", justifyContent: "end" }}
        >
          <IconButton
            size="medium"
            onClick={handleSidebar}
            sx={{
              transition: "background 0.3s ease",
              "&:hover": {
                background: "#4493A7",
                "> .MuiSvgIcon-root": {
                  color: "#fff",
                },
              },
            }}
          >
            <CloseRounded
              sx={{
                fontSize: "24px",
                color: "#000",
              }}
            />
          </IconButton>
        </Toolbar>
        <Divider />
        <List disablePadding>
          <SideBarListItem text="Home" link="/" icon={<Home />} />
          <Divider />
          <SideBarListItem
            text="Service"
            link="/service"
            icon={<MedicalServices />}
          />
          <Divider />
          <SideBarListItem
            text="Free Trial"
            link="/free-trial"
            icon={<Whatshot />}
          />
          <Divider />
          <SideBarListItem text="Pricing" link="/pricing" icon={<LocalAtm />} />
          <Divider />
          <SideBarListItem text="About" link="/about" icon={<Info />} />
          <Divider />
          <Accordion
            elevation="false"
            disableGutters
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ padding: "0" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                padding: 0,
                fontWeight: expanded ? "bold" : "normal",
                ".MuiAccordionSummary-content": {
                  margin: "0",
                },
              }}
            >
              <ListItem
                disablePadding
                disableGutters
                sx={{ color: "#000", margin: "0" }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#000" }}>
                    <More />
                  </ListItemIcon>
                  <ListItemText sx={{ fontWeight: "bold", fontSize: "20px" }}>
                    Other
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderLeft: "2px solid #000",
                padding: "0",
                marginLeft: "40px",
              }}
            >
              <SideBarListItem
                text="Portfolio"
                link="/portfolio"
                icon={<MenuBook />}
              />
              <SideBarListItem text="FAQ" link="/faq" icon={<Quiz />} />
              <SideBarListItem text="Blog" link="/blog" icon={<Draw />} />
              <SideBarListItem
                text="Terms of Service"
                link="/terms-of-service"
                icon={<Gavel />}
              />
              <SideBarListItem
                text="Privacy policy"
                link="/privacy-policy"
                icon={<Https />}
              />
            </AccordionDetails>
          </Accordion>
          <Divider />
          <SideBarListItem
            text="Contact"
            link="/contact"
            icon={<PermContactCalendar />}
          />
          <Divider />
        </List>

        <Box padding={2}>
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
          <Stack direction="row" marginLeft="-7px">
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
        </Box>
      </Drawer>
    </Box>
  );
};
export default SideBar;
