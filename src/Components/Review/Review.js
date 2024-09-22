import React, { useEffect, useState } from "react";
import "./Review.css";
import Data from "./Data";
import ReviewP from "./ReviewP";

const Review = () => {
  const [feedback, setFeedback] = useState(false);

  useEffect(
    (feedback) => {
      if (feedback) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto"; // Reset to auto or initial state when popup is closed
      }
    },
    [feedback]
  );
  return (
    <div className="Review">
      <div className="top">
        <p className="RRR">Reviews</p>
        <p className="Fromy">From you</p>
        <button
          className="BBB"
          onClick={(e) => {
            setFeedback(true);
          }}
        >
          + Give Review
        </button>
      </div>
      <div className="imggggg">
        <img src="/image/Group 51.png" alt="img" className="IIIMMM" />
      </div>
      <div className="slider">
        <Data />
        {feedback && <ReviewP onClose={() => setFeedback(false)} />}
      </div>
    </div>
  );
};

export default Review;
