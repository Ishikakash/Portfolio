import "./App.css";
import Hero from "./components/Hero";
import MySkills from "./components/MySkills";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <>
      <Hero/>
      <AboutMe/>
      <MySkills/>
      <Skills/>
      <Work/>
      <Contact/>
    </>
  );
}

export default App;