import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "./Review.css";
import { styled } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#8B4513", // Customize the filled star color
  },
  "& .MuiRating-iconEmpty": {
    color: "#551A8B", // Customize the empty star color
  },
});

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2.2,
  slidesToScroll: 1,
  
};

const Data = () => {
  return (
    <div className="DDATA">
      <Slider {...settings}>
        {data.map((d, index) => (
          <div className="data" key={index}>
            <img src={d.logo} className="logo" alt={d.name} />
            <p className="name">{d.name}</p>
            <StyledRating value={d.rating} readOnly className="star" />
            <p className="feed">{d.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const data = [
  {
    name: "Name",
    rating: 2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: "/image/Vectorss.png",
  },
  {
    name: "Name",
    rating: 1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: "/image/Vectorss.png",
  },
  {
    name: "Name",
    rating: 2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: "/image/Vectorss.png",
  },
  {
    name: "Name",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: "/image/Vectorss.png",
  },
  {
    name: "Name",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: "/image/Vectorss.png",
  },
  {
    name: "Name",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: "/image/Vectorss.png",
  },
  {
    name: "Name",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: "/image/Vectorss.png",
  },
  {
    name: "Name",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: "/image/Vectorss.png",
  },
];
export default Data;
