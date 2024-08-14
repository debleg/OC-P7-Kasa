import React from "react";
import Logements from "../../data/logements.json";

const Card = () => {
  const coverimage = Logements.map((accomodation) => ({
    title: accomodation.title,
    cover: accomodation.cover,
  }));

  return (
    <>
      {coverimage.map((accomodation, index) => (
        <div className="card" key={index}>
          <img
            className="card__img"
            alt={accomodation.title}
            src={accomodation.cover}
          />
          <p className="card__title">{accomodation.title}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
