import React from "react";

import Button from "../Layouts/Button/Button";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="row">
        <Button icon={"home"} text={"Home"} />
        <Button icon={"paste"} text={"Classes"} style={"pad"} />
      </div>
    </div>
  );
};

export default Navbar;
