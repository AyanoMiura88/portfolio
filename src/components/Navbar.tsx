import { AppBar, Button, Toolbar } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
const NavBar = () => {
  return (
    <>
      <AppBar color="default" position="static" style={{ alignItems: "center" }}>
        <Toolbar>
          <AnchorLink
            href="#about"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button>ABOUT</Button>
          </AnchorLink>
          <AnchorLink
            href="#skills"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button color="inherit">SKILLS</Button>
          </AnchorLink>
          <AnchorLink
            href="#works"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button color="inherit">WORKS</Button>
          </AnchorLink>
          <AnchorLink
            href="#contact"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button color="inherit">CONTACT</Button>
          </AnchorLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
