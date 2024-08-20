import React from "react";
import Logements from "../../../data/logements.json";
import { Link } from "react-router-dom";

const Card = () => {
  const coverimage = Logements.map((accommodation) => ({
    id: accommodation.id,
    title: accommodation.title,
    cover: accommodation.cover,
  }));

  return (
    <>
      {coverimage.map((accommodation, index) => (
        <div className="card" key={index}>
          <Link to={`logement/${accommodation.id}`} className="card__link">
          <img
            className="card__img"
            alt={accommodation.title}
            src={accommodation.cover}
          />
          <p className="card__title">{accommodation.title}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
