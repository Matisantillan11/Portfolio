import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import "firebase/firebase-storage";

//Styles
import "../assets/styles/components/ProjectCard.css";
import { LinkExternal } from "./LinkExternal";
import GithubIcon from "../assets/images/icons/github.png";

export const ProjectCard = ({ name, pic, code, review }) => {
  const history = useHistory();

  const searchProject = () => {
    history.push(`/Description?${name}`);
  };

  return (
    <>
      <div className="project_card">
        <img className="project_card--img" src={pic} alt={name} />
        <div className="project_card--container">
          <div className="links-container">
            <LinkExternal link={code} textBtn="View Code" />

            <LinkExternal link={review} textBtn="Live Preview" />

            <p className="link" onClick={searchProject}>
              <span className="link-decoration">More</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
