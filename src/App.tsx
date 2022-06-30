import React from "react";
import NavBar from "./components/Navbar";
import MyAvatar from "./components/MyAvatar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";

const App = () => {
  return (
    <>
      <NavBar />
      <MyAvatar />
      <About />
      <Skills />
      <Works />
    </>
  );
};

export default App;
