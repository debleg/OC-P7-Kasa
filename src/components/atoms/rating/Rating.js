import React from "react";
import GreyStar from "../../../images/star-icon-grey.png";
import RedStar from "../../../images/star-icon-red.png";

const Rating = ({ rating }) => {
    
  //ensures the value is between 1 and 5
  const validRating = Math.min(Math.max(rating, 1), 5);

  return (
    <div className="rating">
      <img
        className="rating__star"
        src={validRating >= 1 ? RedStar : GreyStar}
        alt={validRating >= 1 ? "Red Star" : "Grey Star"}
      />
      <img
        className="rating__star"
        src={validRating >= 2 ? RedStar : GreyStar}
        alt={validRating >= 2 ? "Red Star" : "Grey Star"}
      />
      <img
        className="rating__star"
        src={validRating >= 3 ? RedStar : GreyStar}
        alt={validRating >= 3 ? "Red Star" : "Grey Star"}
      />
      <img
        className="rating__star"
        src={validRating >= 4 ? RedStar : GreyStar}
        alt={validRating >= 4 ? "Red Star" : "Grey Star"}
      />
      <img
        className="rating__star"
        src={validRating >= 5 ? RedStar : GreyStar}
        alt={validRating >= 5 ? "Red Star" : "Grey Star"}
      />
    </div>
  );
};

export default Rating;
