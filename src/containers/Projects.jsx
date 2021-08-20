import React, { useState, useEffect } from "react";

import { ProjectCard } from "../components/projectCard";
import firebase from "firebase/app";
import "firebase/firestore";
import "../assets/styles/containers/Projects.css";

export const Projects = () => {
  const technologies = [
    {
      id: 1,
      name: "HTML5",
      image: "https://cdn.worldvectorlogo.com/logos/html5.svg",
    },
    {
      id: 2,
      name: "CSS3",
      image: "https://cdn.worldvectorlogo.com/logos/css3.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      image: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    },
    {
      id: 4,
      name: "React Js",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      id: 5,
      name: "Firebase",
      image: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    },
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const productRef = db.collection("projects");

    productRef.onSnapshot((snapshot) => {
      if (snapshot.empty) {
        return <h1>No hay productos</h1>;
      } else {
        let projects = [];
        snapshot.forEach((project) => {
          projects = [...projects, { data: project.data() }];
        });

        setProjects(projects);
      }
    });

    return projects;
  }, []);
  return (
    <>
      <h1 className="project-page-title">My Projects</h1>
      <div className="projects_container">
        {projects &&
          projects.map((project, i) => (
            <ProjectCard
              key={i}
              /*  projectId = {project.projectId} */
              name={project.data.name}
              pic={project.data.pic}
              description={project.data.description}
              react={project.data.react}
              code={project.data.code}
              review={project.data.review}
              technologies={technologies}
            />
          ))}
      </div>
    </>
  );
};
