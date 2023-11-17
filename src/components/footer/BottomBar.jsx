import { Box, Typography } from "@mui/material";
import NavLink from "./NavLink";

const BottomBar = () => {
  return (
    <Box
      sx={{
        paddingY: "10px",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body2">&copy; CutOut Zone.</Typography>

      <NavLink />
    </Box>
  );
};
export default BottomBar;
