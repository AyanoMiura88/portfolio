import { AppBar, Button, Toolbar } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";

const style = {
  textDecoration: "none",
  color: "inherit",
};
const NavBar = () => {
  return (
    <>
      <AppBar color="default" position="static" style={{ alignItems: "center" }}>
        <Toolbar>
          <AnchorLink href="#about" style={style}>
            <Button color="inherit">ABOUT</Button>
          </AnchorLink>
          <AnchorLink href="#skills" style={style}>
            <Button color="inherit">SKILLS</Button>
          </AnchorLink>
          <AnchorLink href="#works" style={style}>
            <Button color="inherit">WORKS</Button>
          </AnchorLink>
          <AnchorLink href="#contact" style={style}>
            <Button color="inherit">CONTACT</Button>
          </AnchorLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
