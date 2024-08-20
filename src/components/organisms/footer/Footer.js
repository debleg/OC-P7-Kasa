import React from "react";
import logo from "../../../images/logo-medium-white.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__logo" src={logo} alt="Logo de Kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
