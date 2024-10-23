import React from "react";
import style from "./Nav.css";
import { Button } from "@mui/material";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar1 = () => {
  return (
    <>
      <div className="navbar">
        <Link to="home" spy={true} smooth={true} offset={50} duration={500} >
        <img src="/image/Vector.png" alt="a" className="navpic" />
        </Link>
        <b className="button_of_navbar">
          <n className="Bhome">
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              <Button variant="text" sx={{ color: "black", fontSize: "20px" }}>
                Home
              </Button>
            </Link>
          </n>
          <n className="BAbout">
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
              <Button variant="text" sx={{ color: "black", fontSize: "20px" }}>
                About
              </Button>
            </Link>
          </n>
          <n className="BTrainers">
            <Link to="trainers" spy={true} smooth={true} offset={50} duration={500}>
              <Button variant="text" sx={{ color: "black", fontSize: "20px" }}>
                Trainers
              </Button>
            </Link>
          </n>
          <n className="BReview">
            <Link to="review" spy={true} smooth={true} offset={50} duration={500}>
              <Button variant="text" sx={{ color: "black", fontSize: "20px" }}>
                Review{" "}
              </Button>
            </Link>
          </n>
          <n className="Bplans">
            <Link to="plans" spy={true} smooth={true} offset={50} duration={500}>
              <Button variant="text" sx={{ color: "black", fontSize: "20px" }}>
                Plans{" "}
              </Button>
            </Link>
          </n>
        </b>
        <n className="BJoin">
          <Link to="plans" spy={true} smooth={true} offset={50} duration={500}>
            <button className="B_Join">Join NOW</button>
          </Link>
          {/* <Button
              variant="contained"
              sx={{ backgroundColor: "black", color: "white", border: "2px" }}
            >
              Join NOW
            </Button> */}
        </n>
      </div>
    </>
  );
};

export default Navbar1;
