import React, { useState } from "react";
import "./Joinp2.css";
import { GiBiceps } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Joinp3 from "./Joinp3";

const Joinp2 = ({ onClose  }) =>{
  const [lastp, setLast] = useState(false)
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleClick = (buttonId) => {
    setSelectedButtons((prevSelected) => {
      if (prevSelected.includes(buttonId)) {
        return prevSelected.filter((id) => id !== buttonId);
      } else {
        return [...prevSelected, buttonId];
      }
    });
  };
  return (
    <div className="JoinP2">
      <div className="box_2st">
        <GiBiceps size={"49px"} className="bse" />
        <p className="fist_line">
          Join us Now!!
          <button className="co" onClick={<Home />}>
            <IoCloseSharp size={"29px"} />
          </button>
        </p>
        <p>
          <p className="line"></p>
          <p className="Ellipse1">1</p>
          <p className="Line1_2"></p>
          <p className="Ellipse_2">2</p>
          <p className="Line2"></p>
          <p className="Ellipse3">3</p>
        </p>
        <p className="allpyline">
          <p id="L1"> Basic Detail</p>
          <p id="L2"> Membership Detail</p>
          <p id="L3"> Payment</p>
        </p>
        <p className="Mem"> Membership Details</p>
        <p className="F_B_R">
          <input type="text" className="T_B_1" placeholder="Plan" />{" "}
          <input type="number" className="T_B_2" placeholder="Month" />{" "}
        </p>{" "}
        <p className="F_B_R_2">
          <input type="number" className="T_B_3" placeholder="Plan Duration" />{" "}
          <input type="text" className="T_B_4" placeholder="Start Date" />{" "}
          <input type="text" className="T_B_5" placeholder="End Date" />{" "}
        </p>
        <p className="button-container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((buttonId) => (
            <button
              key={buttonId}
              className={`selectable-button ${
                selectedButtons.includes(buttonId) ? "selected" : ""
              }`}
              onClick={() => handleClick(buttonId)}
            >
              Goal {buttonId}
            </button>
          ))}
        </p>
        <button className="F_Bu_2" 
        onClick={()=>{
          setLast(true)
        }}
        >Next</button>
      </div>
      {lastp && <Joinp3 />
      }
    </div>
  );
}

export default Joinp2;
