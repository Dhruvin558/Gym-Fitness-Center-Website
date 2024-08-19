import React from 'react'
import { GiBiceps } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Joinp3 = () => {
  return (
    <div className='F_P_'>
      <div className="box_1st">
        <GiBiceps size={"49px"} className="bse" />
        <p className="fist_line">
          Join us Now!!
          <button className="co" onClick={onClose}>
            <IoCloseSharp size={"29px"} />
          </button>
        </p>
        <p>
          <p className="line"></p>
          <p className="Ellipse1">1</p>
          <p className="Line1"></p>
          <p className="Ellipse2">2</p>
          <p className="Line2"></p>
          <p className="Ellipse3">3</p>
        </p>
        <p className="allpyline">
          <p id="L1"> Basic Detail</p>
          <p id="L2"> Membership Detail</p>
          <p id="L3"> Payment</p>
        </p>
    </div>
</div>  )
}

export default Joinp3
