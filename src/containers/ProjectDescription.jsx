import React, { useState, useEffect } from "react";
import { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

import { Navbar } from "../components/Navbar.jsx";
import "../assets/styles/containers/ProjectDescription.css";
import { useHistory } from "react-router-dom";

export const ProjectDescription = () => {
  const [projectDescription, setProjectDescription] = useState({});
  const history = useHistory();
  useEffect(() => {
    const db = firebase.firestore();
    const dbref = db.collection("projects");

    let projectName = history.location.search.substr(1).replace("%20", "-");

    dbref
      .where("name", "==", `${projectName}`)
      .get()
      .then((doc) => {
        if (!doc.empty) {
          let projectDescription = {};
          doc.forEach((project) => {
            if (project.exists) {
              projectDescription = project.data();
            }
          });

          setProjectDescription(projectDescription);
        } else {
          console.log("not added");
        }
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <div className="projectDescription_container">
        <h1 className="title-description">{projectDescription.name} PROJECT</h1>
        <div className="topbar">
          <p>🚀 {projectDescription.subtitle}</p>

          <a href={projectDescription.code} target="_blank">
            Code
          </a>
          <a href={projectDescription.review} target="_blank">
            Review
          </a>
        </div>
        <div className="images-container">
          <img src={projectDescription.pic} alt={projectDescription.name} />
        </div>
        <div className="description_container">
          <h2>About</h2>
          <p>{projectDescription.description}</p>
          <p>{projectDescription.subdescription}</p>
          <p>{projectDescription.p1}</p>
          <p>{projectDescription.p2}</p>
        </div>
        {/* <div className="techs_container">
        <h2>Technologies</h2>
        {projectDescription.technologies.map((tech, i) => {
          return (
            <ul key={i}>
              <li className="MyStack-list-item">
                <img
                  key={i}
                  className="MyStack-list-item--img"
                  src={projectDescription.images[i]}
                  alt={tech}
                />
                {tech}
              </li>
            </ul>
          );
        })} 
        </div>*/}
      </div>
    </>
  );
};

/* class ProjectDescription extends Component {
  state = {
    name: "",
    project: {
      technologies: [],
      images: [],
    },
    loading: true,
    error: false,
  };

  searchingProject = () => {
    
  };
  componentDidMount() {
    this.searchingProject();
  }

  render() {
    return (
      
    );
  }
}

export default ProjectDescription; */
