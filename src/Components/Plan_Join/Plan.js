import React, { useState } from "react";
import "./Plan.css";
import Monthplan from "./Monthplan";
import Yearlyplan from "./Yearlyplan";
import Joinp1 from "./Joinp/Joinp1";



function Plan() {
  const [visible, setVisible] = useState("Monthplan");
  return (
    <div className="Plan">
      <p className="item_Plan" id="first">
        Pricing plan
      </p>
      <p className="item_Plan">
        <p id="second">JOIN TODAY</p>
        <p className="Button_BG">
          <button
            onClick={(e) => {
              setVisible("Monthplan");
            }}
            className="Button_1"
            id="B_Monthly"
          >
            Monthly
          </button>
          <button
            onClick={(e) => {
              setVisible("Yearlyplan");
            }}
            id="B_Yearly"
          >
            Yearly
          </button>
        </p>
      </p>
      <p>
      </p>
      {visible === "Monthplan" && <Monthplan />}
      {visible === "Yearlyplan" && <Yearlyplan />}
      <Joinp1 />
    </div>
  );
}

export default Plan;
