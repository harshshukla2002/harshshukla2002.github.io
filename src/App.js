import "./App.css";
import NameSection from "./Component/Name";
import NavBar from "./Component/Navbar";
import "./CSS/Navbar.css";
import "./CSS/Name.css";
import "./CSS/Skills.css";
import "./CSS/AboutMe.css";
import "./CSS/Project.css";
import "./CSS/Github.css";
import "./CSS/Contact.css";
import AboutMe from "./Component/AboutMe";
import Skills from "./Component/Skills";
import Project from "./Component/Project";
import Github from "./Component/Github";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black", color: "white" }}>
      <NavBar />
      <hr />
      <NameSection />
      <AboutMe />
      <Skills />
      <Github />
      <Project />
      <div style={{ borderBottom: "2px solid red", margin: "10px" }}></div>
      <Contact />
    </div>
  );
}

export default App;
