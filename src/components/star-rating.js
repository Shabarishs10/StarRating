import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (val) => {
    setRating(val + 1);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <button
            type="button"
            className={index < rating ? "on" : "off"}
            key={index}
            onClick={() => handleStarClick(index)}
          >
            <span>&#9734;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
