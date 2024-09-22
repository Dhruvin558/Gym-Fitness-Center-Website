import React from "react";
import "./Last.css";
import { Link } from "react-router-dom";
import { FiGithub, FiInstagram ,FiFacebook ,FiLinkedin  } from "react-icons/fi";

const Last = () => {
  return (
    <div className="LLLast">
      <div className="bgtext">
        <div className="bg__text">
          <p className="callme">Call us Today </p>
          <p className="Number">+91 - 8200060000</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </div>
      </div>
      <div className="last_FFF">
        <div className="Last_logo">
          <img src="/image/Vector.png" className="img_logo_last" />
          <p className="Last_F_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </div>
        <div className="midd">
          <p className="menu">Menu</p>
          <p className="home_________L">
            <a href="#home">Home</a>
          </p>
          <p className="about_________L">
            <a href="#about">About</a>
          </p>
          <p className="Trainers___text_________L">
            <a href="#Trainers">Trainers</a>
          </p>
          <p className="plans_________L">
            <a href="#Plans">Plans</a>
          </p>
          <p className="reviews_________L">
            <a href="#Reviews">Reviews</a>
          </p>
          {/* __________________
<a href="#" className="home_________L">Homa</a><br/>
        <a href="#" className="about_________L">About</a><br/>
        <a href="#" className="Trainers___text_________L">Trainers</a><br/>
        <a href="#" className="plans_________L">Plans</a><br/>
        <a href="#" className="reviews_________L">Reviews</a><br/>
______________ */}
        </div>
        <div className="lastttt">
            <p className="social___L">Social Media</p>
            <p className=" LinkedIn"><FiLinkedin />{" "}LinkedIn</p>
            <p className=" Facebook">< FiFacebook/>{" "}Facebook</p>
            <p className=" Instagram"><FiInstagram />{" "}Instagram</p>
            <p className=" Github">< FiGithub/>{" "}Github</p>
        </div>
      </div>
    </div>
  );
};

export default Last;
