import React from "react";
import "./Trainers.css";
import Trainers_imag from "./Trainers_imag";
import Trainers_Coache from "./Trainers_Coache";

function Trainers() {
  return (
    <>
      <div className="Trainer">
        <p className="Hading">
          <h1 className="Hading_text">Meet Our Trainers</h1>

          <p className="Hading_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br />
            incididunt ut labore et dolore magna a
          </p>
        </p>
        <Trainers_imag />
        <br />
        <Trainers_Coache />
      </div>
    </>
  );
}

export default Trainers;
