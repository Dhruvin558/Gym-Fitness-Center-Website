import React, { useEffect, useState } from "react";
import "./Monthplan.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import Joinp1 from "./Joinp/Joinp1";

const Monthplan =()=> {
  const [popup, setPopup] = useState(false);
  
  useEffect(() => {
    if (popup) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto'; // Reset to auto or initial state when popup is closed
    }
  }, [popup]);

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
          <button
            className="B_MP"
            onClick={(e) => {
              setPopup("true");
            }}
          >
            Choose Plan
          </button>
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
                <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit
                amet,
              </p>
              <p className="5">
                <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit
                amet,
              </p>
              <p className="5">
                <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit
                amet,
              </p>
              <p className="5">
                <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit
                amet,
              </p>
              <p className="5">
                <RiCheckboxCircleLine size={"20px"} /> Lorem ipsum dolor sit
                amet,
              </p>
            </p>
            <button
              className="B_MP2"
              onClick={(e) => {
                setPopup("true");
              }}
            >
              Choose Plan
            </button>
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
          <button
            className="B_MP"
            onClick={(e) => {
              setPopup("true");
            }}
          >
            Choose Plan
          </button>
        </div>
      </div>
      {popup && <Joinp1 onClose={() => setPopup(false)} />}
    </div>
  );
}

export default Monthplan;
