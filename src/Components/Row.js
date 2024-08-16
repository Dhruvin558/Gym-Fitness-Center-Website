import React from "react";
import "./Row.css";


function Row() {
  return (
    <div className="Row">
      {/* <img src='Image/Rectangle 28.png' alt='black bg'  /> */}.
      <p id="one" className="textbox">
        <l className="Row1">500+</l>
        <p className="Row2">
          Happy Members
          <br /> Our community is growing fast
        </p>
      </p>
      <p id="two" className="textbox">
        <l className="Row3">5+</l>
        <p className="Row4">
          Year Experience <br />
          Experience in various workouts
        </p>
      </p>
      <p id="three" className="textbox">
        <l className="Row5">13+</l>
        <p className="Row6">
          Certified Trainers
          <br />
          Guidance at every step.
        </p>
      </p>
      <p id="four" className="textbox">
        <l className="Row7">90%</l>
        <p className="Row8">
          Customer Satisfaction <br />
          We ensure your progress satisfaction
        </p>
      </p>
    </div>

  );
}

export default Row;
