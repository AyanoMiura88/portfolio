import { AppBar, Button, Toolbar } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <AppBar color="default" position="static" style={{ alignItems: "center" }}>
        <Toolbar>
          <Button>ABOUT</Button>
          <Button color="inherit">SKILLS</Button>
          <Button color="inherit">WORKS</Button>
          <Button color="inherit">CONTACT</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
