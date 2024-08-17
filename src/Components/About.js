import React from "react";
import  style  from"./About.css";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { TbClockCheck } from "react-icons/tb";

function About() {
  return (
    <>
      <div className="About">
        <up>
          <l className="About_hading">Why Choose Us</l>
          <p className="About_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.{" "}
          </p>
        </up>
        <div className="About_Fbox">
          <div className="About_boxer">
            <p>
              <GiBoxingGloveSurprise size={"40px"} className="Boxing_icon" />
              <p className="Boxing_Hading">Trainer Qualifications</p>
              <p className="Boxing_text">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore
              </p>
            </p>
          </div>
          <div className="Money">
            <p>
              <TbMoneybag size={"40px"} className="Money_icon" />
            </p>
            <l className="Money_Hading">Membership Cost</l>
            <p className="Money_text">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="Facility">
            <p>
              <CgGym size={"40px"} className="Facility_icon" />
            </p>
            <p className="Facility_Hading">Facility Amenities</p>
            <p className="Facility_text">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="Time">
            <p>
              <TbClockCheck size={"40px"} className="Time_icon" />
            </p>
            <l className="Time_hading">Operating Hours</l>
            <p className="Time_text">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
        <div className="img">
          <img src="/image/About1.png" alt="image" className="image1" />
          <img src="/image/About2.png" alt="image" className="image2" />
          <img src="/image/About3.png" alt="image" className="image3" />
        </div>
      </div>
    </>
  );
}

export default About;
