import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";


const App = () => {
  return (
    <div>
    <NavBar />
    <Home />
    <About />
    <Skills/>
    <Work />
    < Contact/>
    </div>
  );
};

export default App;