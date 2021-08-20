import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import "firebase/firebase-storage";

//Styles
import "../assets/styles/components/ProjectCard.css";
import { LinkExternal } from "./LinkExternal";

export const ProjectCard = ({ name, pic, code, preview }) => {
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
            <LinkExternal
              link={code}
              sourceImage="https://cdnsanityio/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15svg"
              altImg="Github"
              textBtn="View Code"
            />

            <LinkExternal
              link={preview}
              sourceImage="https://cdnsanityio/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15svg"
              altImg="Github"
              textBtn="Live Preview"
            />

            <p className="link" onClick={searchProject}>
              <span className="link-decoration">More</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
