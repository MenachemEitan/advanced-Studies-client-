import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Layouts/Button/Button";
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(true);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  const handleClasses = () => {
    navigate("/classes");
  };

  return (
    <div className="navbar">
      <div className="row">
        <Button icon={"home"} text={"Home"} onClick={handleHome} />
        <Button
          icon={"paste"}
          text={"Classes"}
          style={"pad"}
          onClick={handleClasses}
        />
      </div>
    </div>
  );
};

export default Navbar;
