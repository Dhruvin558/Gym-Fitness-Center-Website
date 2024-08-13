import { Button, Icon } from "@mui/material";
import React from "react";
import "./Home.css";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";

const Home = () => {
  return (
    <>
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
          <br /> <br />{" "}
          <Button
            variant="contained"
            className="B_Gets"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            Get Started
          </Button>{" "}
          <b className="play_B">
            <Button variant="text" className="B_play" sx={{ color: "black" }}>
              <PlayCircleOutlineOutlinedIcon />
              Play video
            </Button>
          </b>
          <br />
          <ico className="fican">
            <LuFacebook size={38} />
          </ico>
          <ico className="Iicon">
            <FaInstagram size={38} />
          </ico>
          <ico className="lIcon">
            <SlSocialLinkedin size={38} />
          </ico>
          <ico className="GIcon">
            <LuGithub size={38} />
          </ico>
        </div>
        <p className="blackpart">
          <n className="BJoin">
            <Button
              variant="contained"
              sx={{ backgroundColor: "black", color: "white", border: "2px" }}
            >
              Join NOW
            </Button>
          </n>
          .{" "}
        </p>
        <i>
          <img src="/image/bodypic.png" className="bbimage" />
        </i>
      </div>{" "}
    </>
  );
};

export default Home;
