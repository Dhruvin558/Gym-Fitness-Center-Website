import React from "react";
import "./Joinp1.css";
import { GiBiceps } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";


function Joinp1() {
  return (
    <div className="JoinP">
      <div className="box_1st">
        
          <GiBiceps size={"49px"} className="bse" /> 
          <p className="fist_line">
          Join us Now!!


          <button className="co"><IoCloseSharp size={"29px"} /></button>
          
        </p>
        <p>
        <p className="line"></p>
        <p className="Ellipse1">1</p>
        <p className="Line1"></p>
        <p className="Ellipse2">1</p>
        </p>
      </div>
    </div>
  );
}

export default Joinp1;
