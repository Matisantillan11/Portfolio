import React from "react";

export const LinkExternal = ({ textBtn, link, sourceImage, altImg }) => {
  return (
    <>
      <a className="link" rel="noopener noreferrer" target="_blank" href={link}>
        <span className="link-decoration"> {textBtn} </span>
        <span className="icon-change">
          <img
            src="https://cdnsanityio/images/tljndwv6/production/182744b0662c24bb7d37846566bdb7ebee3470d6-15x15svg"
            alt="External Link"
          />
          <img src={sourceImage} alt={altImg} />
        </span>
      </a>
    </>
  );
};
