import React from "react";
import Logements from "../../data/logements.json";

const Card = () => {
  const cardTitle = Logements[1]["title"];
  const cardImgSrc = Logements[1]["cover"];
  return (
    <div className="card">
      <img
        className="card__img"
        alt="Image du logement*insert something here*"
        src={cardImgSrc}
      />
      <p className="card__title">{cardTitle}</p>
    </div>
  );
};

export default Card;
