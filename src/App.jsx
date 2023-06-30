import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Education/>
      <Contact/>
    </div>
  );
};

export default App;
