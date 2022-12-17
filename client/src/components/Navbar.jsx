import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Layouts/Button/Button";
const Navbar = () => {
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true);
  const home = isHome ? "2px solid black" : "";
  const classes = isHome ? "" : "2px solid black";

  const handleHome = () => {
    navigate("/home");
    setIsHome(true);
  };

  const handleClasses = () => {
    navigate("/classes");
    setIsHome(false);
  };

  return (
    <div className="navbar">
      <div className="row">
        <Button
          icon={"home"}
          text={"Home"}
          onClick={handleHome}
          border={home}
        />
        <Button
          icon={"paste"}
          text={"Classes"}
          border={classes}
          onClick={handleClasses}
        />
      </div>
    </div>
  );
};

export default Navbar;
