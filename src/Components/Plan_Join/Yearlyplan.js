import React from "react";
import "./Monthplan.css";
import { RiCheckboxCircleLine } from "react-icons/ri";

function Yearlyplan() {
  return (
<div className="Monthplan">
      <div className="box" id="first_box">
        <div className="box_content">
          <p className="p1">Beginner Plan</p>
          <p className="p2">$60</p>
          <p className="p3">/Year</p>
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
          <p className="p2">$180</p>
          <p className="p3" style={{ position: 'relative', left: '98px' }}>/Year</p>
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
          <p className="p2">$240</p>
          <p className="p3" style={{ position: 'relative', left: '106px' }} >/Year</p>
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
  )
}

export default Yearlyplan
