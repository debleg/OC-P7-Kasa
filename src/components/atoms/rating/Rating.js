import React from "react";
import GreyStar from "../../../images/star-icon-grey.png";
import RedStar from "../../../images/star-icon-red.png";

const Rating = ({ rating }) => {
    
  //ensures the value is between 1 and 5
  const validRating = Math.min(Math.max(rating, 1), 5);

  //creates table to map through, allows unique key!
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          className="rating__star"
          src={validRating >= star ? RedStar : GreyStar}
          alt={validRating >= star ? "Red Star" : "Grey Star"}
        />
      ))}
    </div>
  );
};

export default Rating;
