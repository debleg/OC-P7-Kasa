import React from "react";
import { useState, useEffect } from "react";
import Navigation from "../../molecules/navigation/Navigation";
import largeLogo from "../../../images/logo-large.png";
import mediumLogo from "../../../images/logo-medium.png";

const Header = () => {
  const [logo, setLogo] = useState(largeLogo);

  useEffect(() => {
    const updateLogo = () => {
      if (window.innerWidth <= 768) {
        setLogo(mediumLogo);
      } else {
        setLogo(largeLogo);
      }
    };

    updateLogo();

    window.addEventListener("resize", updateLogo);

    return () => window.removeEventListener("resize", updateLogo);
  }, []);

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Logo de Kasa" />
      <Navigation />
    </div>
  );
};

export default Header;
