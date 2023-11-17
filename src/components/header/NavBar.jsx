import Link from "next/link";
import Image from "next/image";
import { Container, AppBar, Toolbar } from "@mui/material";
import Hamberger from "./Hamberger";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      elevation="1"
      sx={{ background: "#000000" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: "60px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* logo */}
          <Link href="/">
            <Image src="/logo/cutout-zone.png" width={280} height={40} />
          </Link>

          {/* mobile manu */}
          <Hamberger />

          {/* dasktop manu */}
          <NavLink />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
