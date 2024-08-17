import React from "react";
import { Button, Icon } from "@mui/material";

function Trainers_Coache() {
  return (
    <div className="Coache">
      <div className="coache_item">
        <img src="image/Rectangle 34.png" className="img_1" />
      </div>
      <div className="coache_item">
        <img src="image/Rectangle 35.png" className="img_2" />
      </div>
      <div id="text_1" className="text">
        <h1 className="hading_Coache">COACHES</h1>
        <p className="test_coach">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br />
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          <br />
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea
          <br />
          commodo consequat.
        </p>
        <p className="p">Are you looking for a Mentor?</p>
        <button className="b_coache">Explore More</button>
      </div>
    </div>
  );
}

export default Trainers_Coache;
