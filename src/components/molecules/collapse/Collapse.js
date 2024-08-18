import React, { useState } from "react";
import CollapseArrow from "../../../images/arrow-icon-rounded.png";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setHasBeenClicked(true); //if not set to true the animation on the arrow plays on page load
  };

  const arrowClass = hasBeenClicked
    ? isOpen
      ? "collapse__arrow--open"
      : "collapse__arrow--close"
    : "";
  const contentClass = isOpen ? "collapse__content--open" : "";

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleOpen}>
        <span className="collapse__title">{title}</span>
        <img className={`collapse__arrow ${arrowClass}`} src={CollapseArrow} />
      </div>
      {isOpen && (
        <div className={`collapse__content ${contentClass}`}>{children}</div>
      )}
    </div>
  );
};

export default Collapse;
