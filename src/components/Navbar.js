import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>GALAXY X</h1>
      </Link>
    </div>
  );
};

export default Navbar;
