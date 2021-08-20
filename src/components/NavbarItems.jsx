import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/NavbarItems.css";

export const NavbarItems = ({ status, onClick }) => {
  return (
    <ul className="navbar__items-menu" id="menu" status={status}>
      <li className="navbar__items--link" onClick={onClick}>
        <Link className="navbar_redirections" to="/">
          Inicio
        </Link>
      </li>

      <li className="navbar__items--link" onClick={onClick}>
        <Link className="navbar_redirections" to="/Projects">
          Portfolio
        </Link>
      </li>
      <li className="navbar__items--link" onClick={onClick}>
        <a
          className="navbar_redirections"
          href="mailto:matias1.santillan@
                gmail.com"
        >
          Contactame
        </a>
      </li>
      <li className="navbar__items--link" onClick={onClick}>
        <a
          className="navbar_redirections"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/matisantillan11/"
        >
          Linkedin
        </a>
      </li>
      <li className="navbar__items--link" onClick={onClick}>
        <a
          className="navbar_redirections"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Matisantillan11"
        >
          Github
        </a>
      </li>
    </ul>
  );
};
