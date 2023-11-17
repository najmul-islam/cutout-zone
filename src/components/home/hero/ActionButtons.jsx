import { Box, Button, ButtonGroup, Divider } from "@mui/material";
import { FormatQuote, PlayArrow } from "@mui/icons-material";

const ActionButtons = () => {
  return (
    <Box sx={{ width: "400px", marginTop: "20px", borderRadius: "5px" }}>
      <Button
        disableElevation
        variant="contained"
        sx={{
          fontSize: "24px",
          borderRadius: "5px 0 0 5px",
          width: "200px",
          background: "#3C93A8",
          transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
          "&:hover": { background: "#47BB9B" },
        }}
        startIcon={<PlayArrow sx={{ width: "30px", height: "30px" }} />}
      >
        Free trial
      </Button>

      <Button
        disableElevation
        variant="contained"
        sx={{
          fontSize: "24px",
          background: "#47BB9B",
          width: "200px",
          borderRadius: "0 5px 5px 0",
          transition: "background ",
          "&:hover": { background: "#3C93A8" },
        }}
        endIcon={<FormatQuote sx={{ width: "30px", height: "30px" }} />}
      >
        Free quote
      </Button>
    </Box>
  );
};
export default ActionButtons;
