import React from "react";
import Logements from "../../../data/logements.json";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      {Logements.map((logement, index) => (
        <div className="card" key={index}>
          <Link
            to={`logement/${logement.id}`}
            className="card__link"
            state={{ logement: logement }}
          >
            <img
              className="card__img"
              alt={logement.title}
              src={logement.cover}
            />
            <p className="card__title">{logement.title}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
