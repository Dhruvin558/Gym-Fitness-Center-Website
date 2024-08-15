import { Button } from "@mui/material";
import React from "react";
import "./Home.css";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";

const Home = () => {
  return (
    <div className="home">
      <div className="home_0">
        <p className="home_p1">
          ELEVATE YOUR <br />
          WORKOUT
        </p>
        <p className="home_p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          <br />
          do eiusmod tempor incididunt ut labore et dolore magna
          <br />
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          <br />
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <br />
        <Button
          variant="contained"
          className="B_Gets"
          sx={{ backgroundColor: "black", color: "white" }}
        >
          Get Started
        </Button>
        <b className="play_B">
          <Button variant="text" className="B_play" sx={{ color: "black" }}>
            <PlayCircleOutlineOutlinedIcon />
            Play video
          </Button>
        </b>
        <p className="icons">
          <LuFacebook size={38} className="fican" />
          <FaInstagram size={38} className="Iicon" />
          <SlSocialLinkedin size={38} className="lIcon" />
          <LuGithub size={38} className="GIcon" />
        </p>
      </div>
      <p className="blackpart"></p>
      <img src="/image/bodypic.png" className="bbimage" />
    </div>
  );
};

export default Home;
