import React from "react";
import Logements from "../../../data/logements.json";

const Card = () => {
  const coverimage = Logements.map((accommodation) => ({
    title: accommodation.title,
    cover: accommodation.cover,
  }));

  return (
    <>
      {coverimage.map((accommodation, index) => (
        <div className="card" key={index}>
          <img
            className="card__img"
            alt={accommodation.title}
            src={accommodation.cover}
          />
          <p className="card__title">{accommodation.title}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
