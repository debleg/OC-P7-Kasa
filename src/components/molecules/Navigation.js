import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink exact activeClassName="navigation__link--active" to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink exact activeClassName="navigation__link--active" to="/about">
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
