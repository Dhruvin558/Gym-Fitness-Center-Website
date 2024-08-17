import React from "react";
import "./Plan.css";
import Monthplan from "./Monthplan";
import Yearlyplan from "./Yearlyplan";
function Plan() {
  return (
    <div className="Plan">
      <p className="item_Plan" id="first">
        Pricing plan
      </p>
      <p className="item_Plan">
      <p  id="second">
        JOIN TODAY
      </p>
      <p className="Button_BG">
      < button  className="Button_1" id="B_Monthly" >Monthly</button>< button   id="B_Yearly" >Yearly</button>
      </p>
      </p>
      <Monthplan />
      <Yearlyplan />
    </div>
  );
}

export default Plan;
