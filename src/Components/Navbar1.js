import React from "react";
import "./Nav.css";
import { Button, Link } from "@mui/material";

const Navbar1 = () => {
  return (
    <>
      <div className="navbar">
        <img src="/image/Vector.png" alt="a" className="navpic" />
        <n className="Bhome">
          <Button variant="text" sx={{ color: "black", fontSize: "20px"  }}>
          Home
          </Button>
        </n>
        <n className="BAbout">
          <Button variant="text" sx={{ color: "black", fontSize: "20px"  }}>
            About
          </Button>
        </n>

        <n className="BTrainers">
          <Button variant="text" sx={{ color: "black", fontSize: "20px"  }}>
            Trainers
          </Button>
        </n>
        <n className="BReview">
          <Button variant="text" sx={{ color: "black", fontSize: "20px"  }}>
            Review{" "}
          </Button>
        </n>
        <n className="Bplans">
          <Button variant="text" sx={{ color: "black", fontSize: "20px" }}>
            Plans{" "}
          </Button>
        </n>
      </div>
    </>
  );
};

export default Navbar1;
