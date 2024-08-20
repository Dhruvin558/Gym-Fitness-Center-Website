import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const ReviewP = ({onClose}) => {
 
  return (
    <div>
      <div className="JoinP">
        <div className="box_Review">
          <p>
            <h2 className="Feddback">Feedback</h2>
            <img
              src="/image/Group 60.svg"
              alt="feedbacklogo"
              className="feedlogo"
            />
            <button className="co" onClick={onClose}>
              <IoCloseSharp size={"29px"} />
            </button>
            <p className="Review_line" />
          </p>
          <p className="  justtttttttttt">
            <div className="hading_Review_p">
              <h3 className="RR_PP_HH">How Are you feeling?</h3>
              <p className="RR_PP_text">
                Your input is valuable in Helping us better understand your need
                and tailor our services accordingly.
              </p>
            </div>
          </p>
          <p className="justtttttttttt">
            <div className="Emojis__">
              <button className="Emoji_Bu_1st">
                <img src="/image/1st.png" alt="eee" className="EMOJI_1" />
              </button>
              <button className="Emoji_Bu_2st">
                <img src="/image/2nd.png" alt="eee" className="EMOJI_2" />
              </button>
              <button className="Emoji_Bu_3st">
                <img src="/image/3rd.png" alt="eee" className="EMOJI_3" />
              </button>
              <button className="Emoji_Bu_4st">
                <img src="/image/4th.png" alt="eee" className="EMOJI_4" />
              </button>
              <button className="Emoji_Bu_5st">
                <img src="/image/5th.png" alt="eee" className="EMOJI_5" />
              </button>
            </div>
          </p>
          <p className="justtttttttttt" >
            <input type="text" className="text_box_feedback"  placeholder="Add a comment..."/>
          </p>
          <button className="Fffed_to_home"  onClick={onClose}><a href="#" className="SubmitNow">Submit Now</a></button>
        </div>
      </div>
    </div>
  );
};

export default ReviewP;
