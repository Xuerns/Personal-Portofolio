import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectSec from "./components/ProjectSec";
import Services from "./components/Services";
import Skills from "./Skills";
import { useState  } from "react";

export default function App() {
  const Category = [
    {name: "All", active: true},
    {name: "FrontEnd", active: false},
    {name: "BackEnd", active: false},
    {name: "FullStack", active: false}
  ]
  const [active, isActive] = useState(Category)

  return(
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <ProjectSec Category={Category} Active={active} isActive={isActive}></ProjectSec>
      <Services></Services>
      <Skills></Skills>
    </> 
  );
}