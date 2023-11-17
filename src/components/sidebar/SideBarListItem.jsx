"use client";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const SideBarListItem = ({ text, link, icon }) => {
  const { selectedUrl, handleSelectedUrl } = useTheme();
  const router = useRouter();

  return (
    <ListItem
      disablePadding
      onClick={() => router.push(link)}
      sx={{ color: "#000" }}
    >
      <ListItemButton
        selected={selectedUrl === link}
        onClick={() => handleSelectedUrl(link)}
      >
        <ListItemIcon sx={{ color: "#000" }}>{icon}</ListItemIcon>
        <ListItemText sx={{ fontWeight: "bold", fontSize: "20px" }}>
          {text}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
export default SideBarListItem;
