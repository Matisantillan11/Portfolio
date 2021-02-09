import React from "react";
import ReactDOM from "react-dom";

import ProjectsDescriptions from "./containers/ProjectsDescriptions.jsx";

import "./assets/index.css";
import banner from "./assets/images/godhard.png";
import Projects from "./containers/Projects.jsx";
import App from "./components/App.jsx";

let technologies = ["JavaScript", "CSS3"];
ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementById("root")
);

{
  /* <ProjectsDescriptions 
  projectImage={banner}
  projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." 
  projectName="Portfolio"
  tecnologies={technologies}/>  */
}
