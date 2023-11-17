import { Box, Container, Grid, Typography } from "@mui/material";
import Typed from "./Typed";
import ActionButtons from "./ActionButtons";

const Hero = () => {
  return (
    <Box
      paddingY={5}
      sx={{
        backgroundImage: 'url("/hero/home-hero-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            md={6}
            xs={12}
            display="flex"
            alignItems="center"
            alignContent="center"
          >
            <Box>
              <Typography variant="h2" fontSize={36} fontWeight="bold">
                Are you looking for
              </Typography>
              <Typed />
              <Typography variant="h2" fontSize={36} fontWeight="bold">
                Your long Experienced Team can do That for you!
              </Typography>
              <ActionButtons />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Box
              component="img"
              src="/hero/home-hero-girl.png"
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Hero;
