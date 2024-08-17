import React from "react";
import "./Monthplan.css";
import { RiCheckboxCircleLine } from "react-icons/ri";

function Monthplan() {
  return (
    <div className="Monthplan">
      <div className="box" id="first_box">
        <div className="box_content">
          <p className="p1">Beginner Plan</p>
          <p className="p2">$05</p>
          <p className="p3">/Month</p>
          <p className="p4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut{" "}
          </p>
          <p className="pp1">
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
          </p>
          <button className="B_MP">Choose Plan</button>
        </div>
      </div>








      {/* ---------2nd---------------------------------------------------------------------------------------------- */}








      <div className="box" id="second_box">
        <p className="Sd">
      <div className="box_content">
          <p className="p1">Beginner Plan</p>
          <p className="p2">$15</p>
          <p className="p3">/Month</p>
          <p className="p4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut{" "}
          </p>
          <p className="pp1">
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
          </p>
          <button  className="B_MP2">Choose Plan</button>
        </div>
        </p> 
      </div>





      {/* -------------------------------------------------------------------------------------------------------- */}








      <div className="box" id="third_box">
      <div className="box_content">
          <p className="p1">Expert Plan</p>
          <p className="p2">$20</p>
          <p className="p3">/Month</p>
          <p className="p4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut{" "}
          </p>
          <p className="pp1">
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
            <p className="5">
              <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit amet,
            </p>
          </p>
          <button className="B_MP">Choose Plan</button>
        </div>
      </div>
    </div>
  );
}

export default Monthplan;
