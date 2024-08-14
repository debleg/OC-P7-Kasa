import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navigation__link--active" : ""
          }
          to="/"
        >
          <li className="navigation__item">Accueil</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navigation__link--active" : ""
          }
          to="/about"
        >
          <li className="navigation__item">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
