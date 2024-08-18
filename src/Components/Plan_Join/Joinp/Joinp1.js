import React from "react";
import "./Joinp1.css";
import { GiBiceps } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useDropzone } from "react-dropzone";

function Joinp1() {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });
  return (
    <div className="JoinP">
      <div className="box_1st">
        <GiBiceps size={"49px"} className="bse" />
        <p className="fist_line">
          Join us Now!!
          <button className="co">
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
        <p className="BasicDetails">Basic Details</p>
        <input type="text" placeholder="Enter name" className="Rectangle1" />
        <input
          type="number"
          placeholder="Enter phone no"
          className="Rectangle2"
        />
        <input type="email" placeholder="Enter email" className="Rectangle3" />

        <div className="Rectangle4" {...getRootProps()}>
          <input {...getInputProps()} />
        </div>
        <p className="f_b">
        <input type="email" placeholder="Enter email" className="Rectangle5" />
        <input type="email" placeholder="Enter email" className="Rectangle6" />
        <input type="email" placeholder="Enter email" className="Rectangle7" />
        <input type="e  mail" placeholder="Enter email" className="Rectangle8" />
        </p>
      </div>
    </div>
  );
}

export default Joinp1;
