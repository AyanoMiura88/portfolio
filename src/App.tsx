import React from "react";
import NavBar from "./components/Navbar";
import MyAvatar from "./components/MyAvatar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <MyAvatar />
      <About />
      <Skills />
      <Works />
      <Contact/>
    </>
  );
};

export default App;
