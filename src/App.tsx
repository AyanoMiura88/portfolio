import NavBar from "./components/Navbar";
import MyAvatar from "./components/MyAvatar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import ScrollUp from "./components/ScrollUp";

const App = () => {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <section>
        <MyAvatar />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <ScrollUp/>
    </>
  );
};

export default App;
